import NavBar from '../components/Navbar/Navbar'
import '../styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Hamza Faham</title>
    </Head>
    <NavBar />
    <Component {...pageProps} />
  </>)
}
