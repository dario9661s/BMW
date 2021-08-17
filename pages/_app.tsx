import App from "next/app"
import React, { useState, useEffect } from "react"
import "../styles/main.css"
import "../styles/swiper.min.css"
import { Provider } from "react-redux"
import { store } from "../state/index"
import Nav from "../components/UI/Navbar"

type Props = {
  pageProps: Object
  Component: any
  store: Object
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
 */
const MyApp: React.FC<Props> = (props) => {

  const { Component, pageProps } = props

  return (
    <Provider store={store}>
      <Nav/>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
