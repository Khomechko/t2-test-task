import "./style.scss";

type LogoProps = {
  logo: string;
};

export const Logo = ({ logo }: LogoProps) => {
  return (
    <div className="logo">
      <img src={logo}></img>
    </div>
  );
};
