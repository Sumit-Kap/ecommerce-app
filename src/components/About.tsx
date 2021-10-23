import React from "react";

export default class About extends React.Component {
  render() {
    console.log("printing props", this.props);
    return <h1>About us</h1>;
  }
}
