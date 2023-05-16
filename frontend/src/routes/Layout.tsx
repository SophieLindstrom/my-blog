import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="page-wrapper">
        <Outlet />
      </div>
    </>
  );
}
