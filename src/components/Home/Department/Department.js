import React from "react";
import { Link } from "react-router-dom";
import dept from "../../../image/dept.jpg";
import "./Department.css";
const Department = () => {
  return (
    <div>
      <div class="container department-card">
        <div class="card-group vgr-cards">
          <div class="card">
            <div class="card-img-body">
              <img class="card-img" src={dept} alt="Card image cap" />
            </div>
            <div class="card-body">
              <h4 class="card-title">All Department</h4>
              <p class="card-text">
                We have several department in our hospital. We have orthpedic,
                cardiology,medicine,asthama,heart,child care department in our
                hospital. Come to our hospital and take our services.
              </p>
              <Link to="/department" class="btn btn-outline-warning">
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
