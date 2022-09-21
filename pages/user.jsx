import Head from "next/head";
import Link from "next/link";
import User from "../components/User";

const Home = (props) => {
  let { show, setShow } = props;
  return (
    <div
      className={`inline-block transition-all w-full md:w-[calc(100%-230px)] m-auto ${
        show ? "translate-x-[77px] md:translate-x-0" : ""
      }`}
      dir="rtl"
    >
      <div className="container font-cairo home bg-background p-7 min-h-[100vh] flex flex-col justify-between">
        <Head>
          <title>Chater</title>
        </Head>
        <header>
          <div className="flex justify-between items-center relative after:w-40 md:after:w-[20rem] after:h-1 after:bg-second-background after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
            <User show={show} setShow={setShow} />
            <div>
              <i
                className="fas fa-angle-left text-main font-bold text-2xl cursor-pointer"
                onClick={() => setShow(!show)}
              />
            </div>
          </div>
          <div className="call md:pr-20">
            <Link href="/call">
              <i className="fas fa-phone-volume call-icon rotate-[-45deg]" />
            </Link>
            <Link href="/video">
              <i className="fas fa-video call-icon" />
            </Link>
          </div>
        </header>
        <section className="message flex justify-center items-center">
          <div className="relative cursor-pointer">
            <form method="POST">
              <input
                type="file"
                name="file"
                className="opacity-0 absolute h-full w-full"
              />
              <i className="fas fa-plus message-icon" />
            </form>
          </div>
          <div className="relative cursor-pointer">
            <form method="POST">
              <input
                type="file"
                name="image"
                className="opacity-0 absolute h-full w-full"
              />
              <button type="submit">
                <i className="fas fa-images message-icon" />
              </button>
            </form>
          </div>
          <div>
            <form className="inline-block relative" method="POST">
              <input
                type="text"
                placeholder="أكتب رسالتك"
                name="msg"
                className="bg-second-background p-2 pr-5 pl-5 border-none outline-none md:w-[500px] rounded-lg placeholder:text-[#555]"
              />
              <button type="submit">
                <i className="fas fa-telephone" />
              </button>
            </form>
          </div>
          {/* <div>
            <i className="fas fa-microphone message-icon" />
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Home;
