import { Outlet, useLocation } from "react-router-dom";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import { AUTH_PATH } from "constant";



// compoent: 레이아웃 //
export default function Container() {

  //       state: 현재 페이지의 path name 상태   //
  const { pathname } = useLocation();

  

  //       render: 레이아웃 랜더링         //
  return (
    <>
      <Header />
      <Outlet />
      {pathname !== AUTH_PATH() && <Footer />}
    </>
  )
}