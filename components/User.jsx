import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.jpg";
import { useRouter } from "next/router";

const User = (props) => {
  let { show, setShow } = props;
  let url = useRouter().route;
  return (
    <div className="user flex justify-between items-center p-1 pb-7 md:p-7">
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
            #12600
          </span>
        </div>
      </div>
      {url !== "/" ? (
        <div>
          <i
            className="fas fa-bars text-main font-bold text-2xl cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
