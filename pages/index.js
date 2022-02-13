import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Dictionaries and Translators" />
        <p className="description">
          <ul>
            <li>
              <a src="#">Dict 1</a>
            </li>
            <li>
              <a src="#">Dict 2</a>
            </li>            
          </ul>
        </p>
      </main>

      <Footer />
    </div>
  )
}
