import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import withRedux from 'next-redux-wrapper'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps: pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

const makeStore = () => store

export default withRedux(makeStore)(MyApp) 
