import App from '../components/App.js'
import Head from 'next/head'
import _JSXStyle from 'styled-jsx/style'
export default () => (
  <div>
  <Head>
    <title>Hockey Cards</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139240683-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-139240683-1');
    </script>
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
