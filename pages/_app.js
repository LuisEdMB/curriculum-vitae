import '../src/styles/main.css'
import Head from 'next/head'

const prefix = process.env.NODE_ENV === "production" 
                  ? "/curriculum-vitae" : ""

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Curriculum Vitae</title>
        <link rel="icon" type="image/x-icon" href={ prefix + "/favicon.ico" } />
      </Head>
      <Component {...pageProps} />
    </div>
  )  
}