
import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://kit.fontawesome.com/a1d72236eb.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}