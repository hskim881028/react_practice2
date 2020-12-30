import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    userName: "",
    message: "",
  };

  handleChange = (e) => {
    console.log(e.target.name + " : " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(this.state.userName + " : " + this.state.message);
    this.setState({
      userName: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>event practice</h1>
        <input
          type="text"
          name="userName"
          placeholder="사용자명"
          value={this.state.userName}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <input
          type="text"
          name="message"
          placeholder="암꺼나 입력해주세요!"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>confirm</button>
      </div>
    );
  }
}

export default EventPractice;
