import Tele2Logo from "../../../../assets/images/tele2-logo.png";
import { Location } from "../../ui/location";
import { Logo } from "../../ui/logo";
import { NotificationBell } from "../../ui/notification-bell";
import "./style.scss";

export const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-top__inner">
          <Logo logo={Tele2Logo} />
          <div className="header-top__function-block">
            <Location />
            <NotificationBell />
          </div>
        </div>
      </div>
    </>
  );
};
