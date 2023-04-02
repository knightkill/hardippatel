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
        <Header title="Didn't got time to update anything yet" />
        <p className="description">
            There are many secret subdomains though, try to find them!
        </p>
      </main>

      <Footer />
    </div>
  )
}
