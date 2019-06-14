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
				price: 3800,
				usage: "점심식사",
				date: "2019. 6. 13 오후 12:33:00"
			},
			{
				id: 1,
				type: "수입",
				price: 200000,
				usage: "시험감독 알바",
				date: "2019. 6. 13 오후 15:00:00"
			}
		],
		keyword: ""
	};

	change = event => {
		this.setState({
			keyword: event.target.value
		});
	};

	add = data => {
		const { list } = this.state;
		this.setState({
			list: list.concat({ id: ++this.currentId, ...data })
		});
	};

	remove = id => {
		const { list } = this.state;
		this.setState({
			list: list.filter(info => info.id !== id)
		});
	};

	update = (id, data) => {
		const { list } = this.state;
		this.setState({
			list: list.map(info => (id === info.id ? { ...info, ...data } : info))
		});
	};

	render() {
		const { list, keyword } = this.state;
		const filteredlist = list.filter(
			info => info.usage.indexOf(keyword) !== -1
		);

		return (
			<React.Fragment>
				<AccountBookForm onAdd={this.add} />
				<p>
					<input
						placeholder="검색어를 입력 (in 사용목적)"
						onChange={this.change}
						value={keyword}
					/>
				</p>
				<hr />
				<AccountBookInfoList
					list={filteredlist}
					onRemove={this.remove}
					onUpdate={this.update}
				/>
			</React.Fragment>
		);
	}
}

export default App;
