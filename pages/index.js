import Head from 'next/head'
import FeedbackForm from '@components/FeedbackForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Feedback Quick Entry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="description">
          <FeedbackForm />
        </div>
      </main>
    </div>
  )
}
