import Head from "next/head";
import Image from "next/image";
import User from "../components/User";
import Logo from "../assets/images/logo.jpg";

export default function Search(props) {
  let { show, setShow } = props;
  return (
    <div
      className={`inline-block transition-all w-full md:w-[calc(100%-230px)] m-auto ${
        show ? "translate-x-[77px] md:translate-x-0" : ""
      }`}
      dir="rtl"
    >
      <div className="container font-cairo home bg-background p-7 min-h-[100vh]">
        <Head>
          <title>Chater - Search</title>
        </Head>
        <header>
          <User show={show} setShow={setShow} />
        </header>
        <section className="m-auto p-5 md:pr-20 md:pl-20 relative after:w-[20rem] after:h-1 after:bg-main after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
          <h2 className="text-main font-bold text-xl mt-3 mb-3">
            إبحث عن أصدقائك
          </h2>
          <div className="relative">
            <i className="fas fa-search absolute mr-2 top-0 bottom-0 m-auto leading-[45px] text-white" />
            <form>
              <input
                type="text"
                placeholder="أكتب ID صديقك"
                className="w-full border-none outline-none p-3 pr-10 rounded-lg bg-hover text-white placeholder:text-[#e1e1e1]"
              />
            </form>
          </div>
        </section>
        <div className="result m-auto md:p-5 md:pr-20 md:pl-20">
          <h2 className="text-main font-bold text-xl mt-3 mb-3">الأشخاص</h2>
          <div className="users">
            {Array(8)
              .fill(8)
              .map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl flex justify-between items-center pl-10 mb-5"
                >
                  <div className="user flex justify-between items-center p-7">
                    <div className="flex justify-between items-center">
                      <Image
                        src={Logo}
                        alt="Logo"
                        width={55}
                        height={55}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="mr-5 inline-block text-main font-bold text-lg">
                          مروان زايد
                        </span>
                        <span className="mr-5 inline-block text-main font-bold text-sm">
                          #{12600 + i}
                        </span>
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-user-plus text-2xl cursor-pointer text-main" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
