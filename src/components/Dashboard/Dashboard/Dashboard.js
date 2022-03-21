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
      <div class="grid-container">
        <div class="menu-icon">
          <i class="fas fa-bars header__menu"></i>
        </div>

        <aside class="sidenav">
          <div class="sidenav__close-icon">
            <i class="fas fa-times sidenav__brand-close"></i>
          </div>
          <ul class="sidenav__list">
            <li class="sidenav__list-item">
              <Link className="nav-admin" to={`${url}/makeAdmin`}>
                Make Admin
              </Link>
            </li>
            <li class="sidenav__list-item">
              <Link className="nav-admin" to={`${url}/appointmentlist`}>
                Appointments
              </Link>
            </li>
            <li class="sidenav__list-item">Item Three</li>
            <li class="sidenav__list-item">Item Four</li>
            <li class="sidenav__list-item">Item Five</li>
          </ul>
        </aside>

        <main class="main">
          <Switch>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/appointmentlist`}>
              <AppointmentList></AppointmentList>
            </AdminRoute>
          </Switch>
        </main>

        <footer class="footer">
          <div class="footer__copyright">&copy; 2022</div>
          <div class="footer__signature">
            Made with love by pure genius imran
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
