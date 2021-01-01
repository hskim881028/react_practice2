import React, { Component } from "react";
import Info from "./Info";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
//
// class App extends Component {
//   state = {
//     color: "#000000",
//   };
//
//   handleClick = () => {
//     this.setState({ color: getRandomColor() });
//   };
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤색상</button>
//         <ErrorBoundary>
//           <div>야홀홀로로로</div>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

const App = () => {
  return <Info />;
};
export default App;
