// components/AccountBookInfo.js

import React, { Component } from "react";

class AccountBookInfo extends Component {
  static defaultProps = {
    data: {
      id: 0,
      type: "분류",
      price: 0,
      usage: "_",
      date: "_"
    }
  };

  render() {
    const style = {
      border: "1px solid black",
      padding: "5px",
      margin: "5px"
    };

    const { type, price, usage, date } = this.props.data;

    return (
      <div style={style}>
        <div>{type}</div>
        <div>{price}</div>
        <div>{usage}</div>
        <div>{date}</div>
      </div>
    );
  }
}

export default AccountBookInfo;
