import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import User from "../components/User";
import Cover from "../assets/images/Untitled.png";
import Project from "../assets/images/project.png";
import Logo from "../assets/images/logo.jpg";

const UserPage = (props) => {
  let { show, setShow } = props;
  return (
    <div
      className={`transition-all w-full m-auto ${
        show ? "translate-x-[77px] md:translate-x-0" : ""
      }`}
      dir="rtl"
    >
      <div className="container font-cairo home bg-background p-7 min-h-[100vh] flex flex-col">
        <Head>
          <title>Chater - Users</title>
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
        <section className="relative text-center after:w-[20rem] after:h-1 after:bg-main after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:rounded after:m-auto">
          <div className="images">
            <div className="cover w-fit m-auto relative">
              <Image
                src={Cover}
                width={600}
                height={250}
                alt="caver"
                className="rounded-xl overflow-hidden w-full"
              />
              <Link href="/setting#cover_img">
                <i
                  className="fa-solid fa-camera cam-icon"
                  style={{ filter: "grayscale(1)" }}
                ></i>
              </Link>
            </div>
            <div className="logo z-20 -mt-12 w-fit m-auto relative">
              <Image
                src={Logo}
                width={100}
                height={100}
                alt="caver"
                className="rounded-full overflow-hidden"
              />
              <Link href="/setting#profile_img">
                <i className="fa-solid fa-camera cam-icon"></i>
              </Link>
            </div>
          </div>
          <h2 className="text-main font-bold text-xl mt-1 mb-1">
            <Link href="/setting#username">
              <i className="fa-solid fa-pencil text-sm mx-2 cursor-pointer"></i>
            </Link>
            ?????????? ????????
          </h2>
          <h2 className="text-hover text-xl mt-3 mb-3">
            <Link href="/setting#desc">
              <i className="fa-solid fa-pencil text-sm mx-2 cursor-pointer"></i>
            </Link>
            ???????? ???????????? ???????????????? ??????????????
          </h2>
        </section>
        <section>
          <h2 className="text-main font-bold text-xl mt-3 mb-3">???????? ??????????</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <Image
              src={Project}
              width={300}
              height={300}
              alt="Project"
              className="rounded-xl overflow-hidden w-full"
            />
            <Image
              src={Project}
              width={300}
              height={300}
              alt="Project"
              className="rounded-xl overflow-hidden w-full"
            />
            <Image
              src={Project}
              width={300}
              height={300}
              alt="Project"
              className="rounded-xl overflow-hidden w-full"
            />
            <Image
              src={Project}
              width={300}
              height={300}
              alt="Project"
              className="rounded-xl overflow-hidden w-full"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserPage;
