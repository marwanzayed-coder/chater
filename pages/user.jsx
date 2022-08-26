import Head from "next/head";
import Link from "next/link";
import User from "../components/User";

export default function Home() {
  return (
    <div
      className="inline-block w-[calc(100%-230px)] m-auto absolute left-[77px] right-0"
      dir="rtl"
    >
      <div className="container font-cairo home bg-background p-7 min-h-[100vh]">
        <Head>
          <title>Chater</title>
        </Head>
        <header>
          <div className="flex justify-between items-center relative after:w-[20rem] after:h-1 after:bg-[#d9d9d9] after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
            <User />
            <div>
              <i className="fas fa-angle-left text-main font-bold text-xl cursor-pointer" />
            </div>
          </div>
          <div className="call pr-20">
            <Link href="/call">
              <i className="fas fa-phone-volume call-icon rotate-[-45deg]" />
            </Link>
            <Link href="/video">
              <i className="fas fa-video call-icon" />
            </Link>
          </div>
        </header>
        <section className="message flex justify-center items-center absolute bottom-5 right-0 left-0">
          <div>
            <i className="fas fa-plus message-icon" />
          </div>
          <div>
            <i className="fas fa-images message-icon" />
          </div>
          <div>
            <input
              type="text"
              placeholder="أكتب رسالتك"
              className="bg-[#d9d9d9] p-2 pr-5 pl-5 border-none outline-none w-[500px] rounded-lg placeholder:text-[#555]"
            />
          </div>
          <div>
            <i className="fas fa-microphone message-icon" />
          </div>
        </section>
      </div>
    </div>
  );
}
