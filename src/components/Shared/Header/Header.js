import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-sm bg-dark fixed-top">
        <div class="container">
          <a href="/" class="navbar-brand">
            <i class="fas fa-blog"></i> &nbsp; Ortho Hospital
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/home" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link active">
                  Doctors
                </a>
              </li>
              <li class="nav-item">
                <Link to="/department" class="nav-link active">
                  Department
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link active">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                {user?.email && (
                  <button onClick={logOut} class="nav-link active nav-btn">
                    LogOut
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
