// components/AccountBookInfoList.js
import React, { Component } from "react";
import AccountBookInfo from "./AccountBookInfo";

class AccountBookInfoList extends Component {
  static defaultProps = {
    list: []
  };

  render() {
    const { list } = this.props;
    const infoList = list.map(info => (
      <AccountBookInfo key={info.key} data={info} />
    ));

    return <React.Fragment>{infoList}</React.Fragment>;
  }
}

export default AccountBookInfoList;
