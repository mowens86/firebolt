import Head from 'next/head'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Page(props) {

  return (
    <div>
        <Head>
          <title>Firebolt | Redirecting</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>{props.data.id}</p>
        <p>{props.data.title}</p>
        <p>{props.data.link}</p>
        {console.log(props.data)}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.deezer.com/album/302127');
  const data = await res.json();
  return { props: { data } }
}