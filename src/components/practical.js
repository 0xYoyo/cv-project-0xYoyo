import React, { Component } from "react";

class Practical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      startDate: "",
      endDate: "",
      editMode: true,
    };
  }

  updateCompanyName = (e) => {
    this.setState({ companyName: e.target.value });
  };
  updatePositionTitle = (e) => {
    this.setState({ positionTitle: e.target.value });
  };
  updateMainTasks = (e) => {
    this.setState({ mainTasks: e.target.value });
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
              <h1>Practical Experience</h1>
              <li>
                <label>Company Name</label>
                <input
                  type="text"
                  onChange={this.updateCompanyName}
                  value={this.state.companyName}
                ></input>
              </li>
              <li>
                <label>Position Title</label>
                <input
                  type="text"
                  onChange={this.updatePositionTitle}
                  value={this.state.positionTitle}
                ></input>
              </li>
              <li>
                <label>Main Tasks</label>
                <input
                  type="text"
                  onChange={this.updateMainTasks}
                  value={this.state.mainTasks}
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
            <h1>Practical Experience</h1>
            <li>Company Name: {this.state.companyName}</li>
            <li>Title of Position: {this.state.positionTitle}</li>
            <li>Main Tasks: {this.state.mainTasks}</li>
            <li>Start Date: {this.state.startDate}</li>
            <li>End Date: {this.state.endDate}</li>
            <button onClick={this.handleSubmit}>Edit</button>
          </ul>
        </div>
      );
    }
  }
}

export default Practical;
