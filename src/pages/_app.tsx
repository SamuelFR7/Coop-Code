import React from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/Global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
