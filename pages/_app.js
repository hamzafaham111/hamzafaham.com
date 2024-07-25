import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import '../styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Hamza Faham - Software Engineer</title>
        <meta name="description" content="I am a Software Engineer having two years of Full stack development experience. Explore my portfolio to see my projects and skills." /> 
        <meta property="og:title" content="Hamza Faham - Software Engineer" />
        <meta property="og:description" content="I am a Software Engineer having two years of Full stack development experience. Explore my portfolio to see my projects and skills." />
      </Head>
    
    <NavBar />
    <div  className='min-h-[100vh] bg-black px-4 sm:px-8 md:px-32'>
    <Component {...pageProps} />
    </div>
    <Footer />
  </>)
}
