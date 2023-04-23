import '@/styles/globals.css'
import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function App({ Component, pageProps }) {
  return (
    <>
       <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <title>Grad School HTML5 Template</title>
       
        <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      
        <link rel="stylesheet" href="/css/fontawesome.css" />
        <link rel="stylesheet" href="/css/templatemo-grad-school.css" />
        <link rel="stylesheet" href="/css/owl.css" />
        <link rel="stylesheet" href="/css/lightbox.css" />
      </Head> 

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}
