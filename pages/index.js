/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Avachar | Home</title>
      </Head>  
      <div className="">
      <img className="m-auto p-5  rounded rounded-lg" src="/img/main-characters.jpg" alt="Main Characters" />
      </div>
    </>
  )
}
