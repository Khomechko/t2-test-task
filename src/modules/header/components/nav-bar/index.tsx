import { NavItem } from "../../ui/nav-item";
import "./style.scss";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__wrapper">
        <div className="nav-bar__inner">
          <NavItem>Преимущества Tele2</NavItem>
          <NavItem>Тарифы</NavItem>
          <NavItem>Акции и спецпредложения</NavItem>
          <NavItem>Промотариф Tele2</NavItem>
          <NavItem>Технология eSim</NavItem>
          <NavItem>Подключение нового абонента</NavItem>
        </div>
      </div>
    </nav>
  );
};
