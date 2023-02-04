import "../styles/globals.css";
import Header from "../components/header";
import { Fragment } from "react";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header></Header>
      <Footer></Footer>
      <Component {...pageProps} />
    </Fragment>
  );
}
