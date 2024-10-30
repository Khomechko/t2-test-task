import { SlLocationPin } from "react-icons/sl";
import "./style.scss";

export const Location = () => {
  return (
    <div className="location">
      <SlLocationPin color="#7c8792" />
      <span className="location__title">Москва и область</span>
    </div>
  );
};
