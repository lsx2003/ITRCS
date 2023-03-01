import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header></Header>
      <Footer></Footer>
      <Component {...pageProps} />
    </Provider>
  );
}
