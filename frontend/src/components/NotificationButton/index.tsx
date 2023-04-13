import React from "react";
import NotificationIcon from "../../assets/img/notification-icon.svg";
import "./styles.css";

export default function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={NotificationIcon} alt="Notificar" />
    </div>
  );
}
