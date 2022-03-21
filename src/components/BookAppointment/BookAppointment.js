import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./BookAppointment.css";
const BookAppointment = () => {
  const { user } = useAuth();
  //taking input data from form
  let initialInfo = {
    email: user.email,

    name: user.displayName,
    address: "",

    phone: "",

    inputamount: "",
  };
  const [appointment, setAppointment] = useState(initialInfo);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/appointment/${id}`)
      .then((response) => response.json())
      .then((data) => setAppointment(data));
  }, []);

  //calculation discount
  /* if (appointment.price > 25000) {
    const hasToPay = appointment.price - appointment.price * 0.8;
    const discount = appointment.price - appointment.price * 0.2;
    console.log(discount);
  } */
  const totalPrice = function (amount) {
    if (amount > 25000) {
      const discount = amount - amount * 0.2;
      return discount;
    } else {
      return amount;
    }
  };
  const result = totalPrice(appointment.price);

  const [appointmentData, setAppointmentData] = useState(initialInfo);
  // setAppointmentData(initialInfo);
  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newAppointmentData = { ...appointmentData };
    newAppointmentData[field] = value;
    setAppointmentData(newAppointmentData);
  };
  console.log(appointmentData);
  const history = useHistory();
  //send order data to the DB
  const appointmentSubmit = (e) => {
    const newAppointment = {
      ...appointmentData,
      doctorName: appointment.name,
      result: result,
    };

    fetch("http://localhost:5000/appointmentlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAppointment),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          history.push("/");
        }
      });
    e.preventDefault();
  };
  return (
    <>
      <div class="container appointment-form">
        <div class="checkout-card">
          <div class="title"></div>
          <div class="price-container"></div>
          <form onSubmit={appointmentSubmit}>
            <div class="detail-info">
              <div class="info">
                {appointment.price > 25000 ? (
                  <>
                    <h3>Total Bill ${appointment.price}</h3>
                    <h5>Discount Bill ${result}</h5>
                  </>
                ) : (
                  <h3>Total Bill ${appointment.price}</h3>
                )}
                <small>
                  Enter your detail to complete appointment with{" "}
                  {appointment.name}
                </small>
              </div>
              <div class="input-field">
                <label for="card_number">Email</label>
                <input
                  name="email"
                  onBlur={handelOnBlur}
                  defaultValue={user.email}
                  type="email"
                  id="card_number"
                />
              </div>
              <div class="input-field">
                <label for="card_number">Name</label>
                <input
                  type="text"
                  name="displayName"
                  onBlur={handelOnBlur}
                  defaultValue={user.displayName}
                  id="card_number"
                />
              </div>
              <div class="input-field">
                <label for="card_number">Address</label>
                <input
                  type="text"
                  name="address"
                  onBlur={handelOnBlur}
                  id="card_number"
                />
              </div>
              <div class="input-field">
                <label for="card_number">Phone</label>
                <input
                  type="text"
                  name="phone"
                  onBlur={handelOnBlur}
                  id="card_number"
                />
              </div>

              <div class="grid">
                <div class="input-field">
                  <label for="expire_date">Appointment date</label>
                  <input
                    type="date"
                    name="date"
                    onBlur={handelOnBlur}
                    id="expire_date"
                  />
                </div>
                <div class="input-field">
                  <label for="card_code">Amount</label>
                  <input
                    type="number"
                    name="inputamount"
                    onBlur={handelOnBlur}
                    id="card_code"
                  />
                </div>
              </div>
              {appointment.price > 25000 ? (
                <p>
                  {" "}
                  amount exceeds 25000 BDT ,so you have to pay 80% and you will
                  get discount 20%.
                </p>
              ) : (
                <p>please enter correct amount.</p>
              )}

              <button type="submit" class="btn">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
