import React, { Component } from "react";
import "./App.css";
import AccountBookForm from "./components/AccountBookForm";
import AccountBookInfoList from "./components/AccountBookInfoList";

class App extends Component {
  //field
  currentId = 1;

  state = {
    list: [
      {
        id: 0,
        type: "지출",
        Price: 3800,
        usage: "점심식사",
        date: "2019. 6. 13 오후 12:33:00"
      },
      {
        id: 1,
        type: "수입",
        Price: 200000,
        usage: "시험감독 알바",
        date: "2019. 6. 13 오후 15:00:00"
      }
    ]
  };
  add = data => {
    const { list } = this.state;
    this.setState({
      list: list.concat({ id: ++this.currentId, ...data })
    });
  };
  render() {
    const { list } = this.state;
    return (
      <React.Fragment>
        <AccountBookForm onAdd={this.add} />
        {JSON.stringify(list)}
        <AccountBookInfoList list={list} />
      </React.Fragment>
    );
  }
}

export default App;
