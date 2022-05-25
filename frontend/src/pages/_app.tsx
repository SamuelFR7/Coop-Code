import React from 'react'
import type { AppProps } from 'next/app'

import { GlobalStyle } from '../styles/Global'
import { ConfigProvider } from '../context/ConfigContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ConfigProvider>
        <Component {...pageProps} />
      </ConfigProvider>
      <GlobalStyle />
    </>
  )
}

export default MyApp
