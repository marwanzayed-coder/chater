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
          <title>Chater - Friends</title>
        </Head>
        <header>
          <div className="flex justify-between items-center relative after:w-40 md:after:w-[20rem] after:h-1 after:bg-second-background after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
            <User show={show} setShow={setShow} />
            <i
              className="fas fa-bars text-main font-bold text-2xl cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </div>
        </header>
        <section className="m-auto p-5 md:pr-20 md:pl-20 relative after:w-[20rem] after:h-1 after:bg-main after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
          <h2 className="text-main font-bold text-xl mt-3 mb-3">متصل الان</h2>
          <div className="relative friends flex p-2 overflow-auto h-[79px]">
            {Array(20)
              .fill(20)
              .map((item, i) => (
                <Image
                  src={Logo}
                  alt="Logo"
                  width={55}
                  height={55}
                  key={12600 + i}
                  className="rounded-full min-w-[55px] min-h-[55px]"
                />
              ))}
          </div>
        </section>
        <div className="result m-auto md:p-5 md:pr-20 md:pl-20">
          <h2 className="text-main font-bold text-xl mt-3 mb-3">دردشاتك</h2>
          <div className="users">
            {Array(8)
              .fill(8)
              .map((item, i) => (
                <div
                  key={12600 + i}
                  className="bg-white rounded-xl flex justify-between items-center mb-5"
                >
                  <div className="user w-full flex justify-between items-center p-3">
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
                          href={`/user/message/${12600 + i}`}
                          className="mr-5 inline-block text-main font-bold text-lg"
                        >
                          مروان زايد
                        </a>
                        <span className="mr-5 inline-block text-main font-bold text-sm">
                          #{12600 + i}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xs">مروان زايد ده ازبل Front...</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
