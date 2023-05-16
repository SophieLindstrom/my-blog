import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-box header-box-logo">
        <img
          className="header-logo"
          src="/assets/sophielogo2.svg"
          alt="sophie"
        />
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
      </div>
    </div>
  );
}
