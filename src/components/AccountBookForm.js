// components/AccountBookForm.js
import React, { Component } from "react";

// 현재 시간을 특정 format 문자열로 반환
const getCurrentTimetoString = () => {
  return new Date().toLocaleString();
};

class AccountBookForm extends Component {
  state = {
    type: "지출",
    price: "",
    usage: "",
    date: ""
  };

  // input 태그 내용 변경 시 이벤트 처리
  changeInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      date: getCurrentTimetoString()
    });
  };

  render() {
    return (
      <form>
        <select name="type" onChange={this.changeInput}>
          <option defaultValue>지출</option>
        </select>
        <input
          placeholder="금액"
          type="number"
          name="price"
          value={this.state.price}
          onChange={this.changeInput}
        />
        <input
          placeholder="사용목적"
          type="usaage"
          value={this.state.usage}
          onChange={this.changeInput}
        />
        <div>
          <span>타입 : {this.state.type}</span>
          <br />
          <span>
            금액 : {this.state.price !== "" ? `${this.state.price}원` : "0원"}
          </span>
          <br />
          <span>
            용도 : {this.state.usage !== "" ? `${this.state.usage}원` : "_"}
          </span>
          <br />
          <span>날짜 : {this.state.date}</span>
          <br />
        </div>
      </form>
    );
  }
}

export default AccountBookForm;
