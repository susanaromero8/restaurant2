import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Principal from "../components/Principal";

const Layout = ({}) => {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <>
      {isHome ? (
        <div className="bg-[url('/public/backgroundmovil.png')] md:bg-[url('/public/banner.png')] bg-cover h-full md:h-screen flex flex-col">
          <Header p="p-4" mp="md:p-10" />

          <Principal />
        </div>
      ) : (
        <Header bg="bg-[#FF5C14]" p="p-2" />
      )}

      <Outlet />
    </>
  );
};

export default Layout;
