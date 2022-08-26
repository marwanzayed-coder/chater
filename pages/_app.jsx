import "../styles/globals.css";
import "../assets/css/all.min.css";
import Slider from "../components/Slider";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  let [show, setShow] = useState(true);
  return (
    <>
      <Slider show={show} setShow={setShow} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
