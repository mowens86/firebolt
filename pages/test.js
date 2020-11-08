import Head from 'next/head'
import Footer from './components/footer'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Test({ data }) {
  // Render data...
  return (
  <div>List of stuff: {data}</div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.deezer.com/playlist/4341978/tracks?index=3&limit=7`)
  const data = await res.json();

  // Pass data to the page via props
  return { props: 
    { 
      data
    } 
  }
}

export default Test