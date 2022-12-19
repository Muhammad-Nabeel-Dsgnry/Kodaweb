import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import "../styles/globals.css";
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Head from "next/head";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

function MyApp({ Component, pageProps }) {

    useEffect(() => {
      AOS.init();
    }, [])

  return (
    <SSRProvider>
      <Layout>
        {/* <Header /> */}
      <Component {...pageProps} />
        <Footer />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp;
