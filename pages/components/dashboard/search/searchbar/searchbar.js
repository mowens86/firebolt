import styles from './searchbar.module.scss';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
 
const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        const result = await axios(url);
 
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData();
  }, [url]);
 
  return [{ data, isLoading, isError }, setUrl];
};
 
export default function Searchbar( props ) {
  const [query, setQuery] = useState('eminem');
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    `https://api.deezer.com/search?q=eminem`,
    { data: [] },
  );
 
  return (
    <Fragment>
      <form
        onSubmit={event => {
          doFetch(
            `https://api.deezer.com/search?q=${setQuery}`,
          );
 
          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
 
      {isError && <div>Something went wrong ...</div>}
 
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
            {console.log(data.data)}
          {data.data.map(item => (
            <li key={item.id}>
              <a href={item.preview}>{item.title_short}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};


// import styles from './searchbar.module.scss';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function Searchbar( props ) {
//     const [ query, setQuery ] = useState('eminem');

//     useEffect(() => {

//         const fetchData = async () => {
//             const result = await axios (`https://api.deezer.com/search?q=${setQuery}`,
//             );

//             console.log(result.data);
//         };
//         fetchData();
//     }, []);

//     // const queryHandler = (e) => {
//     //     e.preventDefault();
//     //     return setQuery(e.target.value);
//     // }

//     return (
//         <section>
//             <form onSubmit={event => {
//                 setQuery(`https://api.deezer.com/search?q=${setQuery}`);

//                 event.preventDefault();
//             }}>
//                 <input 
//                     id="searchValue" 
//                     type="text"
//                     name="query"
//                     value={query}
//                     onChange={event => setQuery(event.target.value)}
//                     placeholder="Search by song title, artist, album..." />
//                 <button type="submit">Search</button>
//             </form>
//         </section>
//     )
//   }

// //   export const getStaticProps = async () => {
// //     const res = await fetch(`https://api.deezer.com/search?q=${setQuery}`);
// //     const data = await res.json();
// //     return { props: { data } }
// //   }