import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="globals.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
