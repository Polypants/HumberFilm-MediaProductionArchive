import React, { Component } from 'react';
import './App.css';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import Archive from '../Archive/Archive.js';
import LeftSideLogo from '../LeftSideLogo/LeftSideLogo.js';
import MenuPanel from '../MenuPanel/MenuPanel.js';
import MenuButton from '../MenuButton/MenuButton.js';
import ResizeWarning from '../ResizeWarning/ResizeWarning.js';
import Search from '../Search/Search.js';
import VideoPlayer from '../VideoPlayer/VideoPlayer.js';

var videoCodes = [
  117193312, 10829255, 79207239, 113841869,
  41131620, 57148705, 148198462, 245687147,
  194276412, 90049558, 191444383, 119920980,
  143233550, 135850173, 77761436, 118342272,
  98225249, 69272765, 167254041, 67077975,
  202245355, 127871359, 108650530, 35037314,
  76512663, 18455326, 7563705, 44228708,
  103389185, 21195133, 52617766, 86033985,
  114758996, 58869875, 29999539, 110421448,
  80828894, 95870548, 58630796, 19237917
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isMenuOpen: false,
      data: [],
      videoPlayerURL: null,
      isShowingVideoPlayer: false,
    };
  }

  componentDidMount() {
    var tempDataArray = [];
    for (var i = 0; i < videoCodes.length; i++) {
      var url = 'http://vimeo.com/api/v2/video/' + videoCodes[i] + '.json';
      fetch(url)
        .then(results => { return (results.json()) })
        .then(json => {
          tempDataArray.push(json[0]);
          if (tempDataArray.length === videoCodes.length) {
            this.setState({ "data": tempDataArray });
          }
        });
    }
  }

  closeVideoPlayer = () => {
    this.setState({ "isShowingVideoPlayer": false });
  }

  setVideoPlayerURL = (videoURL) => {
    this.setState({ "videoPlayerURL": videoURL });
    this.setState({ "isShowingVideoPlayer": true });
  }

  toggleMenu = () => {
    if (this.state.isMenuOpen) {
      this.setState({ "isMenuOpen": false });
    } else {
      this.setState({ "isMenuOpen": true });
    }
  }

  render() {
    var appStyles = classNames(
      'app',
      {'app--isLoading': this.state.isLoading},
      {'app--isMenuOpen': this.state.isMenuOpen},
      {'app--isSearchOpen': this.state.isSearchOpen}
    );

    return (
      <div className={appStyles}>
        <Route path='/' render={() =>
          <Archive data={this.state.data} setVideoPlayerURL={this.setVideoPlayerURL} />
        } />
        <Route path='/' render={() =>
          <LeftSideLogo />
        } />

      { this.state.isShowingVideoPlayer ?
          <VideoPlayer videoID={this.state.videoPlayerURL} closeVideoPlayer={this.closeVideoPlayer} />
        : null }

        <Route path='/search' render={() =>
          <Search />
        } />

        <Route path='/' render={(props) =>
          <MenuPanel {...props} toggleMenu={this.toggleMenu} />
        } />
        <MenuButton toggleMenu={this.toggleMenu} />
        <ResizeWarning />
      </div>
    );
  }

}

export default App;
