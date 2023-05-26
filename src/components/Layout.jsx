import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="relative bg-grayF4F4F4 w-screen min-h-screen">
      <header className="w-full bg-primary pt-9 pb-8 mb-11">
        <div className=" max-w-5xl px-5 mx-auto">
          <Link
            data-cy="header-title"
            to={"/"}
            className="font-poppins-bold text-white text-2xl"
          >
            TO DO LIST APP
          </Link>
        </div>
      </header>
      <div className="px-5 max-w-5xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
