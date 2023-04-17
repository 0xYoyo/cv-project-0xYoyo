import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: "",
      studyTitle: "",
      startDate: "",
      endDate: "",
      editMode: true,
    };
  }

  updateSchoolName = (e) => {
    this.setState({ schoolName: e.target.value });
  };
  updateStudyTitle = (e) => {
    this.setState({ studyTitle: e.target.value });
  };
  updateStartDate = (e) => {
    this.setState({ startDate: e.target.value });
  };
  updateEndDate = (e) => {
    this.setState({ endDate: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
    console.log(this.state.editMode);
  };

  render() {
    if (this.state.editMode) {
      return (
        <div className="card">
          <form>
            <ul>
              <h1>Educational Experience</h1>
              <li>
                <label>School Name</label>
                <input
                  type="text"
                  onChange={this.updateSchoolName}
                  value={this.state.schoolName}
                ></input>
              </li>
              <li>
                <label>Study Title</label>
                <input
                  type="text"
                  onChange={this.updateStudyTitle}
                  value={this.state.studyTitle}
                ></input>
              </li>
              <li>
                <label>Starting date</label>
                <input
                  type="text"
                  placeholder="Month & Year"
                  onChange={this.updateStartDate}
                  value={this.state.startDate}
                ></input>
              </li>
              <li>
                <label>End Date</label>
                <input
                  type="text"
                  placeholder="Month & Year / Present"
                  onChange={this.updateEndDate}
                  value={this.state.endDate}
                ></input>
              </li>
              <button onClick={this.handleSubmit}>Save</button>
            </ul>
          </form>
        </div>
      );
    } else {
      return (
        <div className="card">
          <ul>
            <h1>Educational Experience</h1>
            <li>School Name: {this.state.schoolName}</li>
            <li>Title of Study: {this.state.studyTitle}</li>
            <li>Start Date: {this.state.startDate}</li>
            <li>End Date: {this.state.endDate}</li>
            <button onClick={this.handleSubmit}>Edit</button>
          </ul>
        </div>
      );
    }
  }
}

export default Education;
