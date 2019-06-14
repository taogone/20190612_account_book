// components/AccountBookForm.js
import React, { Component } from "react";

// 현재 시간을 특정 format 문자열로 반환
const getCurrentTimetoString = () => {
	return new Date().toLocaleString();
};

class AccountBookForm extends Component {
	// 에러 방지를 위해 기본 값 설정
	static defaultProps = {
		onAdd: () => {
			console.log("onAdd is not defined.");
		}
	};

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

	// form 태그 submit 이벤트 처리
	submit = event => {
		// state 값을 초기화하는 페이지 리로딩 방지
		event.preventDefault();
		// 부모 component의 add()를 실행
		this.props.onAdd(this.state);
		// 컴포넌트 state를 기본값으로 초기화
		this.setState({
			type: "지출",
			price: "",
			usage: "",
			date: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.submit}>
				<select name="type" onChange={this.changeInput}>
					<option defaultValue>지출</option>
					<option>수입</option>
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
					name="usage"
					value={this.state.usage}
					onChange={this.changeInput}
				/>
				<button type="submit">추가</button>
			</form>
		);
	}
}

export default AccountBookForm;
