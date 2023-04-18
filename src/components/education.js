import React, { useState } from "react";

const Education = () => {
  const [info, setInfo] = useState({
    schoolName: "",
    studyTitle: "",
    startDate: "",
    endDate: "",
  });

  const [editMode, setEditMode] = useState(true);

  const handleSchoolName = (e) => {
    setInfo({
      ...info,
      schoolName: e.target.value,
    });
  };

  const handleStudyTitle = (e) => {
    setInfo({
      ...info,
      studyTitle: e.target.value,
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
            <h1>Educational Experience</h1>
            <li>
              <label>School Name</label>
              <input
                type="text"
                onChange={handleSchoolName}
                value={info.schoolName}
              ></input>
            </li>
            <li>
              <label>Study Title</label>
              <input
                type="text"
                onChange={handleStudyTitle}
                value={info.studyTitle}
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
          <h1>Educational Experience</h1>
          <li>School Name: {info.schoolName}</li>
          <li>Title of Study: {info.studyTitle}</li>
          <li>Start Date: {info.startDate}</li>
          <li>End Date: {info.endDate}</li>
          <button onClick={handleSubmit}>Edit</button>
        </ul>
      </div>
    );
  }
};

export default Education;
