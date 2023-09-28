import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import isTokenValid from "../helpers/isTokenValid";

//import logo from "../assets/svgs/login.svg";

import { Cookies } from "react-cookie";

export const Navbar = () => {
  const location = useLocation();

  const isLoggedIn = isTokenValid();

  const navigate = useNavigate();

  const cookies = new Cookies();

  const onButtonClick = () => {
    if (isLoggedIn) {
      cookies.remove("x-access-token", { path: "/" });
      return navigate("/");
    }
    return navigate("/login");
  };
  const isLinkActive = (link) => {
    return location.pathname === link;
  };

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <nav style={styles.navbarStyle}>
      <div style={styles.navbarLeftStyle} onClick={() => navigate("/")}>
        {/* <img src={logo} alt="" /> */}
      </div>
      <div>
        <ul style={styles.navbarRightStyle}>
          {isLoggedIn && (
            <li style={styles.navbarItemStyle}>
              <div
                onClick={() => navigate("/stock/buy")}
                style={
                  isLinkActive("/stock/buy")
                    ? styles.activeLinkStyle
                    : styles.linkStyle
                }
              >
                Add Stock
              </div>
            </li>
          )}
          <li style={styles.navbarItemStyle}>
            <div
              onClick={() => navigate("/")}
              style={
                isLinkActive("/") ? styles.activeLinkStyle : styles.linkStyle
              }
            >
              Home
            </div>
          </li>
          <li style={styles.navbarItemStyle}>
            <div
              onClick={onButtonClick}
              style={
                isLinkActive("/login")
                  ? styles.activeLinkStyle
                  : styles.linkStyle
              }
            >
              {isLoggedIn ? "Logout" : "Login"}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbarStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
    position: "sticky",
    top: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },

  navbarLeftStyle: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  navbarRightStyle: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },

  navbarItemStyle: {
    marginLeft: "40px",
  },

  activeLinkStyle: {
    fontWeight: "bold",
    color: "#7a4ec7",
    cursor: "pointer",
  },
  linkStyle: {
    color: "#5c5858",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
