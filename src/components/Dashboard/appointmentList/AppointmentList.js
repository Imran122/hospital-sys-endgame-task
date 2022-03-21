import { useEffect, useState } from "react";

const AppointmentList = () => {
  const [allAppointment, setAllAppointment] = useState([]);
  //loadin specific user data
  useEffect(() => {
    const url = `http://localhost:5000/appointments`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllAppointment(data));
  }, []);
  //DELETE an order from list
  const handelDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/appointments/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingAppointment = allAppointment.filter(
              (restAppointment) => restAppointment._id !== id
            );
            setAllAppointment(remainingAppointment);
          }
        });
    }
  };

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User Email</th>
            <th scope="col">Doctor</th>
            <th scope="col">address</th>
            <th scope="col">phone</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allAppointment.map((data) => (
            <tr>
              <th scope="row">{data.email}</th>
              <td>{data.doctorName}</td>
              <td>{data.address}</td>
              <td>{data.phone}</td>
              <td>{data.result}</td>
              <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                <button
                  className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900"
                  classes="[object Object]"
                  onClick={() => handelDeleteOrder(data._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
