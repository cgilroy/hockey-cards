import App from '../components/App.js'
import Head from 'next/head'
import _JSXStyle from 'styled-jsx/style'
export default () => (
  <div>
  <Head>
  <title>Hockey Cards</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charSet="utf-8" />
</Head>
<style jsx global>{`
  body {
    margin: 0;
    font-family: sans-serif;
  }
`}</style>
  <App />
  </div>
)
