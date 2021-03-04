import '../src/styles/main.css'
import Head from 'next/head'

const prefix = process.env.NODE_ENV === "production" 
                  ? "/curriculum-vitae" : ""

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Curriculum Vitae</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Developed by Luis Eduardo Mamani Bedregal" />
        <link rel="icon" type="image/x-icon" href={ prefix + "/favicon.ico" } />
      </Head>
      <Component {...pageProps} />
    </div>
  )  
}