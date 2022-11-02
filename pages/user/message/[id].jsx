import Head from "next/head";
import Link from "next/link";
import User from "../../../components/User";
import Image from "next/image";
import Logo from "../../../assets/images/logo.jpg";
import img from "../../../assets/images/Untitled.png";

const Home = (props) => {
  let { show, setShow } = props;
  return (
    <div
      className={`transition-all w-full m-auto md:px-20 ${
        show ? "translate-x-[77px] md:translate-x-0" : ""
      }`}
      dir="rtl"
    >
      <div className="container font-cairo home bg-background p-7 min-h-[100vh] flex flex-col justify-between">
        <Head>
          <title>Chater - User</title>
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
          <div className="call md:pr-20">
            <Link href="/call">
              <i className="fas fa-phone-volume call-icon rotate-[-45deg]" />
            </Link>
            <Link href="/video">
              <i className="fas fa-video call-icon" />
            </Link>
          </div>
        </header>
        <section className="messages flex-1 mt-3 overflow-auto max-h-[600px] p-2">
          <div className="msg-me">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <h3>أهلا و سهلا</h3>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-you">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <h3>أهلا و سهلا</h3>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-me">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <h3>أهلا و سهلا</h3>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-me call-volume">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <h3>أنهيت مكالمة صوتيه للتو مع مروان</h3>
              <a href="#">
                أعاده الاتصال
                <i className="fas fa-phone-volume" />
              </a>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-you call-volume">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <h3>لقد انها مروان معك الان مكالمه صوتية</h3>
              <a href="#">
                أعاده الاتصال
                <i className="fas fa-phone-volume" />
              </a>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-me call-video">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <h3>أنهيت مكالمة فيديو للتو مع مروان</h3>
              <a href="#">
                أعاده الاتصال
                <i className="fas fa-video" />
              </a>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-you call-video">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <h3>لقد انها مروان معك الان مكالمه فيديو</h3>
              <a href="#">
                أعاده الاتصال
                <i className="fas fa-video" />
              </a>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-me img">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <Image src={img} alt="Img"></Image>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-me file">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <a href="#">Jujutsu.Kaisen.0.The.Movie.2021.mp4</a>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-you file">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <a href="#">Jujutsu.Kaisen.0.The.Movie.2021.mp4</a>
              <span>3:05</span>
            </div>
          </div>
          <div className="msg-you img">
            <Image src={Logo} width={48} height={48} alt="Img"></Image>
            <div>
              <Image src={img} alt="Img"></Image>
              <span>3:05</span>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center">
          <div className="relative">
            <form method="GET">
              <input
                type="file"
                name="file"
                onChange={(e) => console.log(e.target.value)}
                className="opacity-0 absolute h-full w-full cursor-pointer"
              />
              <i className="fas fa-plus message-icon cursor-pointer" />
            </form>
          </div>
          <div className="relative">
            <form method="GET">
              <input
                type="file"
                name="image"
                onChange={(e) => console.log(e.target.value)}
                className="opacity-0 absolute h-full w-full cursor-pointer"
              />
              <button type="submit">
                <i className="fas fa-images message-icon cursor-pointer" />
              </button>
            </form>
          </div>
          <div>
            <form className="inline-block relative" method="GET">
              <input
                type="text"
                placeholder="أكتب رسالتك"
                name="msg"
                className="bg-second-background p-2 pr-5 pl-5 border-none outline-none md:w-[500px] rounded-lg placeholder:text-[#555]"
              />
              <button
                type="submit"
                className="absolute left-0 top-1/2 -mt-5 h-10 w-10"
              >
                <i className="fas fa-paper-plane text-main cursor-pointer" />
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
