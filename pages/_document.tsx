 import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
           <Main />
           <NextScript />
        </body>
      </Html>
    )
  } 
}