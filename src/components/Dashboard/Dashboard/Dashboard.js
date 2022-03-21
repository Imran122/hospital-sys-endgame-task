import React from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Authentication/AdminRoute/AdminRoute";
import MakeAdmin from "../makeAdmin/MakeAdmin";
import "./Dashboard.css";
const Dashboard = () => {
  const { user } = useAuth();
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  return (
    <div>
      <div class="wrapper">
        <div class="sidebar">
          <div class="title">Simple.Team</div>
          <ul class="nav">
            <li>
              <Link className="nav-admin" to={`${url}/makeAdmin`}>
                Make Admin
              </Link>
            </li>
            <li>
              <a>Statistics</a>
            </li>

            <li>
              <a>Experiments</a>
            </li>
            <li>
              <a>Previews</a>
            </li>

            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <div class="content content-is-open">
          <Switch>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
