import "./style.scss";

type NavItemProps = {
  children?: string;
};

export const NavItem = ({ children }: NavItemProps) => {
  return (
    <div className="nav-bar__item" tabIndex={0}>
      <span className="nav-bar__item-title">{children}</span>
      <div className="nav-bar__divider"></div>
    </div>
  );
};
