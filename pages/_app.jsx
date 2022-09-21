import "../styles/globals.css";
import "../assets/css/all.min.css";
import Slider from "../components/Slider";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  let [show, setShow] = useState(false);
  return (
    <>
      <Slider show={show} setShow={setShow} />
      <Component {...(pageProps = { show, setShow })} />
    </>
  );
}

export default MyApp;
