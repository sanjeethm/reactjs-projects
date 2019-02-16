import React, { Component } from "react";

class XRPApi extends Component {
  state = {
    loading: false,
    processData: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(
      "https://data.ripple.com/v2/ledgers/3170DA37CE2B7F045F889594CBC323D88686D2E90E8FFD2BBCD9BAD12E416DB5?transactions=true&binary=false&expand=true"
    )
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        // this.setState({ processData: this.processData(data) });
        this.setState({
          loading: true,
          processData: data
        });
      });
  }

  //   processData(data) {
  //     console.log("in processdata", data.ledger.transactions.length);
  //     console.log("in processdata", data.ledger.account_hash);
  //     var snowDataArray = [];

  //     for (var i = 0; i < data.ledger.length; i++) {
  //       console.log("in for");
  //     }
  //   }

  handleChange = () => {
    const dataProcessed = this.state.processData;
    console.log("dataProcessed ", dataProcessed.ledger.account_hash);
    for (var v = 0; v < dataProcessed.ledger.transactions.length; v++) {
      console.log("in for:::", dataProcessed.ledger.transactions[v]);
    }
  };

  render() {
    //console.log(this.state.loading);
    const { processData } = this.state;
    console.log("in render ", processData);
    return (
      <div>
        <p>hash value of xrp</p>
        <p />
        <p onClick={this.handleChange}>Hello::</p>
      </div>
    );
  }
}

export default XRPApi;
