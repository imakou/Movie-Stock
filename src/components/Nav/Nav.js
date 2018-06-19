import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Avatar, Menu, Icon, Dropdown, Button } from "antd";
import logo from "../../logo.svg";
import LoginModal from "./LoginModal";
import SearchBar from "./SearchBar";

function hoverable(WrappedComponent, propName = "hover") {
  return class HoverableComponent extends Component {
    constructor(props) {
      super(props);

      this.state = { hovered: false };
    }

    turnHoverOn() {
      this.setState({ hovered: true });
      console.log("Hello xxxxon", propName); // log is here
    }

    turnHoverOff() {
      this.setState({ hovered: false });
      console.log("Hello turnHoverOff", this.props); // log is here
    }

    render() {
      const props = { [propName]: this.state.hovered, ...this.props };
      return (
        <div
          onMouseEnter={() => this.turnHoverOn()}
          onMouseLeave={() => this.turnHoverOff()}
        >
          <WrappedComponent {...props} />
        </div>
      );
    }
  };
}

class Nav extends Component {
  render() {
    console.log("Hello this.props", this.props); // log is here
    const content = (
      <Menu style={{ width: "150px" }}>
        <Menu.Item key="1">
          <Icon type="user" /> Account
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Icon type="info-circle-o" /> Summary
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">
          <span onClick={this.handleLogOut}>
            <Icon type="poweroff" /> Log Out
          </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link to="/">
              <img className="NavLogo" src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <SearchBar />
            </div>
            <div className="ml-4">
              <Dropdown overlay={content} placement="bottomCenter">
                <Avatar size="large" icon="user" />
              </Dropdown>
            </div>
            <div className="ml-4">
              <LoginModal />
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {};

export default hoverable(Nav, "5566");