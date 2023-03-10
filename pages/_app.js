import Footer from "../conponents/Footer";
import Navbar from "../conponents/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
