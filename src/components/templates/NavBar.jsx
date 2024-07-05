import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const NavItem = ({ children }) => {
  const path = useLocation();
  const href = path;
  return <Link to={href}>{children}</Link>;
};

export const NavBar = () => {
  return (
    <header className="txt-neutral-content navbar bg-neutral px-5 text-white shadow-lg">
      <nav className="w-full">
        <Link to={"/"}>
          <img src={logo} className="h-10 w-auto"></img>
        </Link>
        <div className="m-auto w-fit">
          <ul className="flex items-center gap-10">
            <Link to={"products"}>
              <span src={logo} className="">
                Products
              </span>
            </Link>
            <Link to={"redux"}>
              <span className="">Redux</span>
            </Link>

            <NavItem>{}</NavItem>
          </ul>
        </div>
      </nav>
    </header>
  );
};
