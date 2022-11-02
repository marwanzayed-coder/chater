import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import User from "../components/User";

const Settings = (props) => {
  let { show, setShow } = props;
  let [notifications, setNotifications] = useState(false);
  return (
    <div
      className={`transition-all w-full m-auto ${
        show ? "translate-x-[77px] md:translate-x-0" : ""
      }`}
      dir="rtl"
    >
      <div className="container font-cairo home bg-background  p-7 min-h-[100vh] flex flex-col">
        <Head>
          <title>Chater - Settings</title>
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
        <section className="px-2">
          <h3 className="text-main font-bold text-2xl">ألاعدادات</h3>
          <div className="bg-white shadow-md p-3 rounded-lg flex justify-between items-center flex-wrap mt-5 md:min-w-[330px]">
            <h3 className="text-main font-bold text-xl">الاشعارات</h3>
            <span className="ml-5 text-gray-400">
              {notifications ? "مفتوح" : "مغلف"}
            </span>
            <label
              className="flex"
              onChange={() => setNotifications(!notifications)}
            >
              <input type="checkbox" className="toggle-checkbox" />
              <div className="toggle-switch"></div>
            </label>
          </div>
          <div
            className="bg-white shadow-md p-3 rounded-lg flex justify-between items-center flex-wrap mt-5"
            id="username"
          >
            <h3 className="text-main font-bold text-xl w-48">
              عدل اسم المستخدم
            </h3>
            <form action="" method="post" className="flex-1 flex">
              <input
                type="text"
                name="username"
                style={{ "min-width": "225px" }}
                className="w-full bg-hover rounded-r-md text-white outline-none placeholder:text-gray-300 p-2"
                placeholder="أكتب اسم المستخدم"
              />
              <input
                type="submit"
                value="تغيير"
                className="p-2 px-3 bg-main text-white rounded-l-md cursor-pointer"
              />
            </form>
          </div>
          <div
            className="bg-white shadow-md p-3 rounded-lg flex justify-between items-center flex-wrap mt-5"
            id="desc"
          >
            <h3 className="text-main font-bold text-xl w-48">عدل الوصف</h3>
            <form action="" method="post" className="flex-1 flex">
              <input
                type="text"
                name="desc"
                style={{ "min-width": "225px" }}
                className="w-full bg-hover rounded-r-md text-white outline-none placeholder:text-gray-300 p-2"
                placeholder="أكتب الوصف"
              />
              <input
                type="submit"
                value="تغيير"
                className="p-2 px-3 bg-main text-white rounded-l-md cursor-pointer"
              />
            </form>
          </div>
          <div
            className="bg-white shadow-md p-3 rounded-lg flex justify-between items-center flex-wrap mt-5"
            id="profile_img"
          >
            <h3 className="text-main font-bold text-xl w-48">غير صوره حسابك</h3>
            <form action="" method="post" className="flex-1 flex">
              <div className="relative flex-1">
                <input
                  type="file"
                  name="profile_img"
                  className="absolute opacity-0 z-10 w-full h-full"
                />
                <div className="bg-slate-600 p-2 flex flex-1 items-center flex-col rounded-md">
                  <i className="fas fa-camera bg-white inline-block text-main rounded-full p-2"></i>
                  <h3 className="text-white">أختر صوره من جهازك</h3>
                </div>
              </div>
              <input
                type="submit"
                value="تغيير"
                className="p-2 px-5 bg-main text-white rounded-md mr-2 cursor-pointer"
              />
            </form>
          </div>
          <div
            className="bg-white shadow-md p-3 rounded-lg flex justify-between items-center flex-wrap mt-5"
            id="cover_img"
          >
            <h3 className="text-main font-bold text-xl w-48">
              غير صوره الخلفيه
            </h3>
            <form action="" method="post" className="flex-1 flex">
              <div className="relative flex-1">
                <input
                  type="file"
                  name="profile_img"
                  className="absolute opacity-0 z-10 w-full h-full"
                />
                <div className="bg-slate-600 p-2 flex flex-1 items-center flex-col rounded-md">
                  <i className="fas fa-camera bg-white inline-block text-main rounded-full p-2"></i>
                  <h3 className="text-white">أختر صوره من جهازك</h3>
                </div>
              </div>
              <input
                type="submit"
                value="تغيير"
                className="p-2 px-5 bg-main text-white rounded-md mr-2 cursor-pointer"
              />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
