import React from "react";
import "./widget.scss";
import {
  MdKeyboardArrowUp,
  MdPersonOutline,
  MdCreditCard,
  MdOutlineLocalShipping,
  MdOutlineAttachMoney,
} from "react-icons/md";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 32;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all user",
        right__icon: (
          <MdPersonOutline
            className="right__icon"
            style={{ color: "teal", backgroundColor: "lightsalmon" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all list",
        right__icon: (
          <MdCreditCard
            className="right__icon"
            style={{ color: "teal", backgroundColor: "lightcyan" }}
          />
        ),
      };
      break;
    case "shipping":
      data = {
        title: "SHIPPINGS",
        isMoney: false,
        link: "See all shippings",
        right__icon: (
          <MdOutlineLocalShipping
            className="right__icon"
            style={{ color: "teal", backgroundColor: "lightyellow" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "CURRENCY",
        isMoney: true,
        link: "See detail",
        right__icon: (
          <MdOutlineAttachMoney
            className="right__icon"
            style={{ color: "teal", backgroundColor: "lightcoral" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget__container">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <MdKeyboardArrowUp />
          {diff}%
        </div>
        {data.right__icon}
      </div>
    </div>
  );
};

export default Widget;
