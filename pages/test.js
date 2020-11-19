import Head from 'next/head'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';


export default function Page(props) {
  const imgUrl = `https://e-cdns-images.dzcdn.net/images/cover/${props.data.data.[0].md5_image}/264x264-000000-80-0-0.jpg`;

  return (
    <div>
        <Head>
          <title>Firebolt | Redirecting</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>{props.data.data.[1].title_short}</p>
        <p>{props.data.data.[1].duration}</p>
        <p></p>
        <audio controls>
          <source src={props.data.data.[1].preview} type="audio/mpeg"/>
        </audio>
        <img 
          src={imgUrl}
          alt={props.data.data.[1].title_short}
          width={250}
          height={250}
        />
        {console.log(props.data)}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.deezer.com/search?q=good+things');
  const data = await res.json();
  return { props: { data } }
}