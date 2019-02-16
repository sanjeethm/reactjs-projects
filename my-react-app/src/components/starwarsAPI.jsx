import React, { Component } from "react";

class StarWarsApi extends Component {
  state = {
    loading: false,
    character: {}
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  render() {
    const text = this.state.loading ? "loading...." : this.state.character.name;
    return (
      <div>
        <p>{this.state.character.name}</p>
        <p>{text}</p>
      </div>
    );
  }
}

export default StarWarsApi;
