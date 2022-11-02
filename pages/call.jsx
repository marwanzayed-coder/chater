import Head from "next/head";
import Image from "next/image";
import User from "../components/User";
import Logo from "../assets/images/logo.jpg";
import Link from "next/link";

export default function Search(props) {
  let { show, setShow } = props;
  return (
    <div
      className={`transition-all w-full m-auto ${
        show ? "translate-x-[77px] md:translate-x-0" : ""
      }`}
      dir="rtl"
    >
      <div className="container font-cairo home bg-background p-7 min-h-[100vh]">
        <Head>
          <title>Chater - Audio Call</title>
        </Head>
        <header>
          <div className="flex justify-between items-center relative after:w-40 md:after:w-[20rem] after:h-1 after:bg-second-background after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
            <User show={show} setShow={setShow} />
            <Link href="/">
              <i
                className="fas fa-angle-left text-main font-bold text-2xl cursor-pointer"
                onClick={() => setShow(!show)}
              />
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
