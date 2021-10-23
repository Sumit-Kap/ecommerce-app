import React from "react";
import { Link } from "react-router-dom";
import "./styles/common-styles.css";
interface Props {}
export default class Header extends React.Component<{}, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-menu">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about-us" className="nav-item">
          About us
        </Link>
        <Link to="/contact-us" className="nav-item">
          Contact us
        </Link>
        <Link to="/sign-in" className="nav-item">
          Sign-in
        </Link>
        <Link to="/sign-up" className="nav-item">
          Sign-up
        </Link>
      </div>
    );
  }
}
