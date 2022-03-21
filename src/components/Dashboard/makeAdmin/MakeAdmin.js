import React, { useState } from "react";
import "./makeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://doctor-server23.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
        e.target.reset();
      });
    e.preventDefault();
  };
  return (
    <div>
      <div class="wrapper">
        <div class="container">
          <div class="col-right">
            <div class="login-form">
              <h2>Make Admin</h2>
              <form onSubmit={handleAdminSubmit}>
                <p>
                  <input
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                    placeholder="Username"
                    required
                  />
                </p>

                <p>
                  <input class="btn" type="submit" value="make admin" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
