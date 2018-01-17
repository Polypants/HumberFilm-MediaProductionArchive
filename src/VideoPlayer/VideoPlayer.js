import React, { Component } from 'react';
import './VideoPlayer.css';
import ReactPlayer from 'react-player';
import $ from 'jquery';

class VideoPlayer extends Component {

  closeVideoPlayer = () => {
    this.props.closeVideoPlayer();
  }

  render() {
    var width = $(window).width()*0.8;
    return (
      <div className="videoPlayer">
        <ReactPlayer playing className="videoPlayer_player" width={width} height={width*0.563} url={"https://vimeo.com/" + this.props.videoID} onEnded={this.closeVideoPlayer} />
        <div className="videoPlayer_close" onClick={this.closeVideoPlayer}>
          <div className="videoPlayer_close_line videoPlayer_close_line-1"></div>
          <div className="videoPlayer_close_line videoPlayer_close_line-2"></div>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
