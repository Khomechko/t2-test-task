import { HeaderTop } from "../header-top";
import { NavBar } from "../nav-bar";
import "./style.scss";

export const Header = () => {
  return (
    <header className="header">
      <HeaderTop />
      <NavBar />
    </header>
  );
};
