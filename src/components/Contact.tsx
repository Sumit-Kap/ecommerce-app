import React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
interface Props {
  // history: any;
}
interface State {}
class Contact extends React.Component<Props, State> {
  render() {
    return <h1>Contact</h1>;
  }
}

export default connect()(Contact);
