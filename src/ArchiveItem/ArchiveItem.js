import React, { Component } from 'react';
import './ArchiveItem.css';
import playIcon from '../_assets/playIcon.svg';
import $ from 'jquery';

class ArchiveItem extends Component {

  componentDidMount() {
    $('.archiveItem_detailInfo').hide();
    const items = document.getElementsByClassName('archiveItem_image');
    const width = document.getElementsByClassName('archive_column')[0].offsetWidth;
    for (var i = 0; i < items.length; i++) {
      items[i].style.height = width * 0.6 + 'px';
    }
  }

  setVideoPlayerURL = () => {
    var videoURL = this.props.film.id;
    this.props.setVideoPlayerURL(videoURL);
  }

  onItemClick = (e) => {
    if (e.target.className === 'archiveItem_playButton' || e.target.className === 'archiveItem_playButton_playIcon') {
      // noting
    } else {
      if ($(e.currentTarget).hasClass('archiveItem--selected')) {
        e.currentTarget.className = 'archiveItem';
        $(e.currentTarget).find('.archiveItem_detailInfo').slideUp();
      } else {
        // remove previously selected item's selected class
        const items = document.getElementsByClassName('archiveItem');
        for (var i = 0; i < items.length; i++) {
          items[i].className = 'archiveItem';
        }
        // set selected class for clicked item
        e.currentTarget.className = 'archiveItem archiveItem--selected';

        // open current selected item's detail view
        $(e.currentTarget).find('.archiveItem_detailInfo').slideDown();

        // close previusly selected item's details
        $('.archiveItem').not('.archiveItem--selected').find('.archiveItem_detailInfo').slideUp();
      }
    }
  }

  render() {
    const imageStyle = {
      backgroundImage: 'url(https://i.vimeocdn.com/video/' + this.props.film.thumbnail_large + ')'
    }
    return (
      <div key={this.props.index} className="archiveItem" onClick={this.onItemClick}>
        <div style={imageStyle} className="archiveItem_image">
          <div className="archiveItem_imageOverlay"></div>
          <p className='archiveItem_title'>{this.props.film.title}</p>
          <div className="archiveItem_playButton" onClick={this.setVideoPlayerURL}>
            <img src={playIcon} className="archiveItem_playButton_playIcon" alt="" />
          </div>
        </div>
        <div className="archiveItem_detailInfo">
          <p className="archiveItem_detailInfo_content archiveItem_detailInfo_title">{this.props.film.title}</p>
          <p className="archiveItem_detailInfo_label">Description</p>
          <p className="archiveItem_detailInfo_content archiveItem_detailInfo_description"
            dangerouslySetInnerHTML={{__html:this.props.film.description}}></p>
        </div>
      </div>
    );
  }
}

export default ArchiveItem;
