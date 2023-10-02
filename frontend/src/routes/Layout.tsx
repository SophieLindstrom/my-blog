import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import DarkMode from "../components/DarkMode";

export default function Layout() {
  return (
    <>
    
      <Header />
      <div><DarkMode></DarkMode></div>
      <div className="page-wrapper">
        <Outlet />
      </div>
    </>
  );
}
