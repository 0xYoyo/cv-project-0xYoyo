import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      editMode: true,
    };
  }

  updateFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  updateLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };
  updateEmail = (e) => {
    this.setState({ emailAddress: e.target.value });
  };
  updatePhoneNumber = (e) => {
    this.setState({ phoneNumber: e.target.value });
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
              <h1>General Information</h1>
              <li>
                <label>First name</label>
                <input
                  type="text"
                  onChange={this.updateFirstName}
                  value={this.state.firstName}
                ></input>
              </li>
              <li>
                <label>Last name</label>
                <input
                  type="text"
                  onChange={this.updateLastName}
                  value={this.state.lastName}
                ></input>
              </li>
              <li>
                <label>Email</label>
                <input
                  type="email"
                  onChange={this.updateEmail}
                  value={this.state.emailAddress}
                ></input>
              </li>
              <li>
                <label>Phone number</label>
                <input
                  type="tel"
                  onChange={this.updatePhoneNumber}
                  value={this.state.phoneNumber}
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
            <h1>General Information</h1>
            <li>First Name: {this.state.firstName}</li>
            <li>Last Name: {this.state.lastName}</li>
            <li>Email Address: {this.state.emailAddress}</li>
            <li>Phone Number: {this.state.phoneNumber}</li>
            <button onClick={this.handleSubmit}>Edit</button>
          </ul>
        </div>
      );
    }
  }
}

export default Personal;
