import React from "react";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to learning react with Faith",
    };
  }

  changeMessage = () => {
    this.setState({
      message: "You have subscribed to our Lessons",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Welcome;
