import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './MenuList.css';

class MenuList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  toggleMenu = () => {
    this.props.toggleMenu();
  }

  render() {
    var item1Styles = classNames('menuList_item', {'menuList_item--active': this.props.location.pathname === '/' && this.state.isHovering === false});
    var item2Styles = classNames('menuList_item', {'menuList_item--active': this.props.location.pathname === '/search' && this.state.isHovering === false});
    return (
      <div className="menuList">
        <ul>
          <li onMouseEnter={() => this.setState({ "isHovering": true })} onMouseLeave={() => this.setState({ "isHovering": false })} onClick={this.toggleMenu} className={item1Styles}><Link to='/'>Home<div className="line"></div></Link></li>
          <li onMouseEnter={() => this.setState({ "isHovering": true })} onMouseLeave={() => this.setState({ "isHovering": false })} onClick={this.toggleMenu} className={item2Styles}><Link to='/search'>Search<div className="line"></div></Link></li>
          <li onMouseEnter={() => this.setState({ "isHovering": true })} onMouseLeave={() => this.setState({ "isHovering": false })} className='menuList_item'><a href='https://mediastudies.humber.ca/programs/film-and-media-production-bachelor-of-arts.html' target='_blank' rel="noopener noreferrer">About<div className="line"></div></a></li>
        </ul>
      </div>
    );
  }
}

export default MenuList;
