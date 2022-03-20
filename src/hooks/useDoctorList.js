import { useEffect, useState } from "react";

const useDoctorList = () => {
  //set data in services
  const [doctors, setDoctors] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [displayDoctors, setDisplayDoctors] = useState([]);
  const [page, setPage] = useState(0);
  //fetch data from fajedb json file
  const size = 4;
  useEffect(() => {
    fetch(`http://localhost:5000/doctors?page=${page}&&size=${size}`)
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data.doctors);
        setDisplayDoctors(data.doctors);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  return [doctors, setDoctors, pageCount, displayDoctors, page, setPage];
};

export default useDoctorList;
