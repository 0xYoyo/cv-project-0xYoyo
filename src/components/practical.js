import React, { useState } from "react";

const Practical = () => {
  const [info, setInfo] = useState({
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    startDate: "",
    endDate: "",
  });

  const [editMode, setEditMode] = useState(true);

  const handleCompanyName = (e) => {
    setInfo({
      ...info,
      companyName: e.target.value,
    });
  };

  const handlePositionTitle = (e) => {
    setInfo({
      ...info,
      positionTitle: e.target.value,
    });
  };
  const handleMainTasks = (e) => {
    setInfo({
      ...info,
      mainTasks: e.target.value,
    });
  };

  const handleStartDate = (e) => {
    setInfo({
      ...info,
      startDate: e.target.value,
    });
  };

  const handleEndDate = (e) => {
    setInfo({
      ...info,
      endDate: e.target.value,
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
            <h1>Practical Experience</h1>
            <li>
              <label>Company Name</label>
              <input
                type="text"
                onChange={handleCompanyName}
                value={info.companyName}
              ></input>
            </li>
            <li>
              <label>Position Title</label>
              <input
                type="text"
                onChange={handlePositionTitle}
                value={info.positionTitle}
              ></input>
            </li>
            <li>
              <label>Main Tasks</label>
              <input
                type="text"
                onChange={handleMainTasks}
                value={info.mainTasks}
              ></input>
            </li>
            <li>
              <label>Starting date</label>
              <input
                type="text"
                placeholder="Month & Year"
                onChange={handleStartDate}
                value={info.startDate}
              ></input>
            </li>
            <li>
              <label>End Date</label>
              <input
                type="text"
                placeholder="Month & Year / Present"
                onChange={handleEndDate}
                value={info.endDate}
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
          <h1>Practical Experience</h1>
          <li>Company Name: {info.companyName}</li>
          <li>Title of Position: {info.positionTitle}</li>
          <li>Main Tasks: {info.mainTasks}</li>
          <li>Start Date: {info.startDate}</li>
          <li>End Date: {info.endDate}</li>
          <button onClick={handleSubmit}>Edit</button>
        </ul>
      </div>
    );
  }
};

export default Practical;
