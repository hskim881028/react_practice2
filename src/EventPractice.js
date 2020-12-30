import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  const onKeyPress = (e) => {
    if (e.key === "enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>키입력해주세요</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="메세지"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Click!</button>
    </div>
  );
};

// class EventPractice extends Component {
//   state = {
//     userName: "",
//     message: "",
//   };
//
//   handleChange = (e) => {
//     console.log(e.target.name + " : " + e.target.value);
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };
//
//   handleClick = (e) => {
//     alert(this.state.userName + " : " + this.state.message);
//     this.setState({
//       userName: "",
//       message: "",
//     });
//   };
//
//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };
//
//   render() {
//     return (
//       <div>
//         <h1>event practice</h1>
//         <input
//           type="text"
//           name="userName"
//           placeholder="사용자명"
//           value={this.state.userName}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="암꺼나 입력해주세요!"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={this.handleClick}>confirm</button>
//       </div>
//     );
//   }
// }

export default EventPractice;
