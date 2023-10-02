import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-400 dark:bg-black h-[150px] p-3 text-xl flex flex-row items-center justify-between">

      <div className="header-box header-box-logo">
        <Link to="/">
          <img
            className="header-logo"
            src="/assets/sophielogo2.svg"
            alt="sophie"
          />
        </Link>
      </div>
      <div className="header-box menu">
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div>
          <Link to="/about">ABOUT</Link>
        </div>
        <div>
          <Link to="/links">LINKS</Link>
        </div>
        <div>
          <Link to="/projects">PROJECTS</Link>
        </div>
        <div>
          <Link to="/admin">ADMIN</Link>
        </div>
      </div>
    </div>
  );
}
