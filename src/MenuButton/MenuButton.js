import React, { Component } from 'react';
import './MenuButton.css';

class MenuButton extends Component {

  toggleMenu = () => {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className="menuButton" onClick={this.toggleMenu}>
        <div className="menuButton_line menuButton_line-1"></div>
        <div className="menuButton_line menuButton_line-2"></div>
        <div className="menuButton_line menuButton_line-3"></div>
      </div>
    );
  }
}

export default MenuButton;
