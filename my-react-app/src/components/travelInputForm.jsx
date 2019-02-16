import React, { Component } from "react";

class TravelForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    isVegan: "",
    isNonVegan: "",
    isLactoseFree: ""
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === "checked"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };
  render() {
    return (
      <form>
        <label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
            name="firstName"
            placeholder="First Name"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
            name="lastName"
            placeholder="Last Name"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
            name="age"
            placeholder="Age"
          />
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label>
          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">---Please select -----</option>
            <option value="germany">Germany</option>
            <option value="singapore">Singapore</option>
            <option value="thailand">Thailand</option>
            <option value="indonesia">Indonesia</option>
            <option value="india">India</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={this.state.isVegan}
            onChange={this.handleChange}
          />
          Vegan ?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isNonVegan"
            checked={this.state.isNonVegan}
            onChange={this.handleChange}
          />
          Non Vegan?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={this.state.isLactoseFree}
            onChange={this.handleChange}
          />
          Lactose Free?
        </label>
        <br />
        <button>Submit</button>

        <h1>Entered Information</h1>
        <p>
          Your Name {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your Age {this.state.age} </p>
        <p>Your Gender {this.state.gender} </p>
        <p>Your Destination {this.state.destination}</p>

        <p>Your Dietary Restrictions </p>
        <p>Vegan {this.state.isVegan ? "Yes" : "No"}</p>
        <p>Non Vegan {this.state.isNonVegan ? "Yes" : "No"}</p>
        <p>LactoseFree {this.state.isLactoseFree ? "Yes" : "No"}</p>
      </form>
    );
  }
}

export default TravelForm;
