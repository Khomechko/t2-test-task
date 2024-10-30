import "./style.scss";

export const NotificationBell = () => {
  return (
    <div className="notification-bell">
      <div className="notification-bell__indicator"></div>
      <span className="notification-bell__top"></span>
      <span className="notification-bell__middle"></span>
      <span className="notification-bell__bottom"></span>
      <span className="notification-bell__rad"></span>
    </div>
  );
};
