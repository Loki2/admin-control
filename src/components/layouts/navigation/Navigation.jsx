import React, { useContext } from "react";
import "./navigation.scss";
import {
  MdSearch,
  MdOutlineLanguage,
  MdDarkMode,
  MdOutlineFullscreenExit,
  MdNotificationsNone,
  MdOutlineChatBubbleOutline,
  MdOutlineList,
} from "react-icons/md";
import { DarkModeContext } from '../../../context/darkModeContext';



function Navigation() {
  const { dispatch } = useContext(DarkModeContext);


  return (
    <div className="navigation">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <MdSearch className="search__icon" />
        </div>
        <div className="list__items">
          <div className="item">
            <MdOutlineLanguage className="item__icon" />
            English
          </div>
          <div className="item">
            <MdDarkMode className="item__icon" onClick={() => dispatch({ type: "DARK" })} />
          </div>
          <div className="item">
            <MdOutlineFullscreenExit className="item__icon" />
          </div>
          <div className="item">
            <MdNotificationsNone className="item__icon" />
            <div className="couter">12</div>
          </div>
          <div className="item">
            <MdOutlineChatBubbleOutline className="item__icon" />
            <div className="couter">7</div>
          </div>
          <div className="item">
            <MdOutlineList className="item__icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/762041/pexels-photo-762041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
