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
          <title>Chater - Search</title>
        </Head>
        <header>
          <div className="flex justify-between items-center relative after:w-40 md:after:w-[20rem] after:h-1 after:bg-second-background after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
            <User show={show} setShow={setShow} />
            <i
              className="fas fa-bars text-main font-bold text-2xl cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </div>{" "}
        </header>
        <div className="result m-auto md:p-5 md:pr-20 md:pl-20">
          <h2 className="text-main font-bold text-xl mt-3 mb-10">
            طلبات الصداقه
          </h2>
          <div className="users">
            {Array(4)
              .fill(4)
              .map((item, i) => (
                <div
                  key={12600 + i}
                  className="bg-hover rounded-xl flex justify-between items-center pl-10 mb-5"
                >
                  <div className="user flex justify-between items-center p-3">
                    <div className="flex justify-between items-center">
                      <Image
                        src={Logo}
                        alt="Logo"
                        width={55}
                        height={55}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <a
                          href={`/user/${12600 + i}`}
                          className="mr-5 inline-block text-white font-bold text-lg"
                        >
                          مروان زايد
                        </a>
                        <span className="mr-5 inline-block text-white font-bold text-sm">
                          #{12600 + i}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <i className="fas fa-x text-2xl w-9 h-9 flex justify-center items-center cursor-pointer text-white bg-main rounded-full p-2 " />
                    <i className="fas fa-check text-2xl w-9 h-9 flex justify-center items-center cursor-pointer text-white bg-main rounded-full p-2 " />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
