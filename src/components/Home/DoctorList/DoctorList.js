import React from "react";
import useDoctorList from "../../../hooks/useDoctorList";
import "./DoctorList.css";
const DoctorList = () => {
  const [doctors, setDoctors, pageCount, displayDoctors, page, setPage] =
    useDoctorList();
  console.log(doctors);
  return (
    <main>
      <div
        class="container-fluid bg-trasparent my-4 p-3"
        style={{ position: "relative" }}
      >
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
          {doctors.map((doctor) => (
            <div class="col">
              <div class="card h-100 shadow-sm">
                {" "}
                <img
                  src={doctor.picture}
                  alt="..."
                  style={{ width: "270px", height: "262px" }}
                />
                <div class="card-body">
                  <div class="clearfix mb-3">
                    {" "}
                    <span class="float-start badge rounded-pill bg-primary">
                      {doctor.name}
                    </span>{" "}
                    <span class="float-end price-hp">{doctor.price} Taka</span>{" "}
                  </div>
                  <h5 class="card-title">{doctor.department}</h5>
                  <div class="text-center my-4">
                    {" "}
                    <a href="#" class="btn btn-warning">
                      Book Now
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              className={number === page ? "selected" : ""}
              key={number}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DoctorList;
