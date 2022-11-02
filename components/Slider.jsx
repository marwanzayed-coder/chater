import Link from "next/link";
import { useRouter } from "next/router";

const Slider = (props) => {
  let url = useRouter().route;
  let { show, setShow } = props;
  return (
    <div
      className={`slider transition-all h-[100vh]  fixed md:relative bg-main text-white p-4 rounded-r-3xl flex justify-center items-center top-0 left-0 md:translate-x-0 ${
        show ? "translate-x-0" : "translate-x-[-77px]"
      }`}
    >
      <div className="flex justify-center items-center flex-col gap-10">
        <Link href="/">
          <i
            className={
              url !== "/" ? "fas fa-home link" : "fas fa-home link active"
            }
            title="Home"
          />
        </Link>
        <Link href="/search">
          <i
            className={
              url !== "/search"
                ? "fas fa-search link"
                : "fas fa-search link active"
            }
            title="Search"
          />
        </Link>
        <Link href="/user">
          <i
            className={
              url !== "/user"
                ? "fas fa-circle-user link"
                : "fas fa-circle-user link active"
            }
            title="User"
          />
        </Link>
        <Link href="/setting">
          <i
            className={
              url !== "/setting"
                ? "fas fa-sliders link"
                : "fas fa-sliders link active"
            }
            title="Setting"
          />
        </Link>
        {/* <Link href="/archive">
          <i
            className={
              url !== "/archive"
                ? "fas fa-box-archive link"
                : "fas fa-box-archive link active"
            }
            title="Archive"
          />
        </Link>
        <Link href="/ban">
          <i
            className={
              url !== "/ban" ? "fas fa-ban link" : "fas fa-ban link active"
            }
            title="Ban"
          />
        </Link> */}
        <Link href="/notification">
          <i
            className={
              url !== "/notification"
                ? "fas fa-bell link"
                : "fas fa-bell link active"
            }
            title="Notification"
          />
        </Link>
      </div>
    </div>
  );
};

export default Slider;
