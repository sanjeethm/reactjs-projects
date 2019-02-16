import React, { Component } from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: ""
    };
  }

  handlerSubmit = () => {
    console.log("handlerSubmit clicked!");
  };
  handleChange = event => {
    console.log(event.target.placeholder);

    const { name, value, type, checked } = event.target;

    type === "checked"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form>
          <b>First Name: </b>
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First Name "
            name="firstName"
            onChange={this.handleChange}
          />
          <br />
          <b>Last Name: </b>
          <input
            type="text"
            value={this.state.lastName}
            placeholder="Last Name "
            name="lastName"
            onChange={this.handleChange}
          />
          <br />
          <b>Please provide text: </b>
          <textarea defaultValue="Some default text" />

          <br />
          <b>Is Friendly </b>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />

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
          <label>Favourite Color</label>

          <select
            onChange={this.handleChange}
            name="favColor"
            value={this.state.favColor}
          >
            <option value="">Please Select.....</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
          </select>

          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          <h1>You are a {this.state.gender}</h1>
          <h1>Your favourite color is {this.state.favColor}</h1>
        </form>
      </div>
    );
  }
}

export default LoginForm;
