import React, { Component } from 'react';
import './LeftSideLogo.css';

import weare from '../_assets/weare.svg';
import humber from '../_assets/humber.svg';

class LeftSideLogo extends Component {
  render() {
    return (
      <div className="leftSideLogo">
        <div className="leftSideLogo_logo">
          <img src={weare} className="leftSideLogo_weare" alt="We Are" />
          <img src={humber} className="leftSideLogo_humber" alt="Humber" />
        </div>
        <div className="leftSideLogo_background"></div>
      </div>
    );
  }
}

export default LeftSideLogo;
