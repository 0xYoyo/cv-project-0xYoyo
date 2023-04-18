import React, { useState } from "react";

const Personal = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const [editMode, setEditMode] = useState(true);

  const handleFirstName = (e) => {
    setInfo({
      ...info,
      firstName: e.target.value,
    });
  };

  const handleLastName = (e) => {
    setInfo({
      ...info,
      lastName: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setInfo({
      ...info,
      emailAddress: e.target.value,
    });
  };

  const handleNumber = (e) => {
    setInfo({
      ...info,
      phoneNumber: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
    console.log(editMode);
  };

  if (editMode) {
    return (
      <div className="card">
        <form>
          <ul>
            <h1>General Information</h1>
            <li>
              <label>First name</label>
              <input
                type="text"
                onChange={handleFirstName}
                value={info.firstName}
              ></input>
            </li>
            <li>
              <label>Last name</label>
              <input
                type="text"
                onChange={handleLastName}
                value={info.lastName}
              ></input>
            </li>
            <li>
              <label>Email</label>
              <input
                type="email"
                onChange={handleEmail}
                value={info.emailAddress}
              ></input>
            </li>
            <li>
              <label>Phone number</label>
              <input
                type="tel"
                onChange={handleNumber}
                value={info.phoneNumber}
              ></input>
            </li>
            <button onClick={handleSubmit}>Save</button>
          </ul>
        </form>
      </div>
    );
  } else {
    return (
      <div className="card">
        <ul>
          <h1>General Information</h1>
          <li>First Name: {info.firstName}</li>
          <li>Last Name: {info.lastName}</li>
          <li>Email Address: {info.emailAddress}</li>
          <li>Phone Number: {info.phoneNumber}</li>
          <button onClick={handleSubmit}>Edit</button>
        </ul>
      </div>
    );
  }
};

export default Personal;
