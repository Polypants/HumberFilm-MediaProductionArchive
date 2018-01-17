import React, { Component } from 'react';
import './MenuPanel.css';

import weare from '../_assets/weare.svg';
import humber from '../_assets/humber_menu.svg';
import MenuList from '../MenuList/MenuList.js';

class MenuPanel extends Component {

  toggleMenu = () => {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className="menuPanel">
        <MenuList {...this.props} toggleMenu={this.toggleMenu} />
        <div className="menuPanel_background"></div>
        <div className="menuPanel_logo">
          <img src={weare} className="menuPanel_weare" alt="We Are" />
          <img src={humber} className="menuPanel_humber" alt="Humber" />
        </div>
        <div className="menuPanel_share">
          <p className="menuPanel_share_title">Share With</p>
          <p className="menuPanel_share_button">Facebook</p>
          <p className="menuPanel_share_button">Twitter</p>
        </div>
      </div>
    );
  }
}

export default MenuPanel;
