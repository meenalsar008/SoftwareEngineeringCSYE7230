import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, logout } from "../Redux/Actions/userActions";
import logo from "../images/ProjectLogo.png";
//import { onSearchInputChange } from "../Redux/Actions/headerActions";

const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  //const { search } = useSelector((state) => state.headerReducer);
  const { userInfo } = userLogin;
  const location=useLocation();

  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, [dispatch]);
  useEffect(() => {
    if (!userLogin?.loading) {
      if (!userLogin?.userInfo?.name) {
        // history.push("/login");
        !(["/register"].includes(location.pathname)) && history.push("login")
      }
    }
  }, [userLogin?.loading, userLogin?.userInfo]);
  return (
    <div>
      {/* Header */}
      <div className="header">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src={logo} />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                      <Link to="/register" className="dropdown-item dropbg">Products</Link>
                      <Link to="/map" className="dropdown-item dropbg">Stores</Link>
                      <Link to="/register" className="dropdown-item dropbg">Contact</Link>
                      <Link
                        className="dropdown-item dropbg"
                        to="/profile"
                      >
                        Profile
                      </Link>
                        <Link
                          className="dropdown-item dropbg"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item dropbg" to="/login">
                          Login
                        </Link>

                        <Link className="dropdown-item dropbg" to="/register">
                          Register
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="navrow">
              <div className="logoDiv">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src={logo} />
                </Link>
              </div>
              <div className="Login-Register">
              <Link to="/register">Products</Link>
              <Link to="/map">Store Locator</Link>
              <Link to="/register">Contact</Link>
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hi, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                    <Link
                        className="dropdown-item dropbg"
                        to="/profile"
                      >
                        Profile
                      </Link>
                      <Link
                        className="dropdown-item dropbg"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Link>
                      
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                  </>
                )}

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Header;
