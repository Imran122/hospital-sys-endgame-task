import React from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Authentication/AdminRoute/AdminRoute";
import AppointmentList from "../appointmentList/AppointmentList";
import MakeAdmin from "../makeAdmin/MakeAdmin";
import "./Dashboard.css";
const Dashboard = () => {
  const { user } = useAuth();
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  return (
    <div>
      <div class="nav-btn">Menu</div>
      <div class="container">
        <div class="sidebar">
          <nav>
            <a href="#">
              Xero<span>Source</span>
            </a>
            <ul>
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <Link className="nav-admin" to={`${url}/makeAdmin`}>
                  Make Admin
                </Link>
              </li>
              <li>
                <Link className="nav-admin" to={`${url}/appointmentlist`}>
                  Appointments
                </Link>
              </li>

              <li>
                <a href="#">Social</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="main-content">
          <h1>Dashboard</h1>
          <Switch>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/appointmentlist`}>
              <AppointmentList></AppointmentList>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
