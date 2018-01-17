import React, { Component } from 'react';
import './Archive.css';
import ArchiveItem from '../ArchiveItem/ArchiveItem.js';

class Archive extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollTopColumn1: 0,
      scrollTopColumn2: 0,
      scrollTopColumn3: 0,
      scrollTopColumn4: 0,
      scrollingColumn: 0,
    };
  }

  onScroll = (e) => {
    const scrollEffectStrength = 0.2;
    const column1 = document.getElementsByClassName("archive_column archive_column-1")[0];
    const column2 = document.getElementsByClassName("archive_column archive_column-2")[0];
    const column3 = document.getElementsByClassName("archive_column archive_column-3")[0];
    const column4 = document.getElementsByClassName("archive_column archive_column-4")[0];
    if (this.state.scrollingColumn === 1) {
      column2.scrollTop += (column1.scrollTop - this.state.scrollTopColumn1) * scrollEffectStrength;
      column3.scrollTop += (column1.scrollTop - this.state.scrollTopColumn1) * (scrollEffectStrength/2);
      column4.scrollTop += (column1.scrollTop - this.state.scrollTopColumn1) * (scrollEffectStrength/4);
    }
    if (this.state.scrollingColumn === 2) {
      column1.scrollTop += (column2.scrollTop - this.state.scrollTopColumn2) * scrollEffectStrength;
      column3.scrollTop += (column2.scrollTop - this.state.scrollTopColumn2) * scrollEffectStrength;
      column4.scrollTop += (column2.scrollTop - this.state.scrollTopColumn2) * (scrollEffectStrength/2);
    }
    if (this.state.scrollingColumn === 3) {
      column2.scrollTop += (column3.scrollTop - this.state.scrollTopColumn3) * scrollEffectStrength;
      column4.scrollTop += (column3.scrollTop - this.state.scrollTopColumn3) * scrollEffectStrength;
      column1.scrollTop += (column3.scrollTop - this.state.scrollTopColumn3) * (scrollEffectStrength/2);
    }
    if (this.state.scrollingColumn === 4) {
      column3.scrollTop += (column4.scrollTop - this.state.scrollTopColumn4) * scrollEffectStrength;
      column2.scrollTop += (column4.scrollTop - this.state.scrollTopColumn4) * (scrollEffectStrength/2);
      column1.scrollTop += (column4.scrollTop - this.state.scrollTopColumn4) * (scrollEffectStrength/4);
    }
    this.setState({ "scrollTopColumn1": column1.scrollTop });
    this.setState({ "scrollTopColumn2": column2.scrollTop });
    this.setState({ "scrollTopColumn3": column3.scrollTop });
    this.setState({ "scrollTopColumn4": column4.scrollTop });
  }

  setVideoPlayerURL = (videoURL) => {
    this.props.setVideoPlayerURL(videoURL);
  }

  render() {
    const filmsHTML = this.props.data.map((film, index) => {
      return ( <ArchiveItem film={film} key={index} setVideoPlayerURL={this.setVideoPlayerURL} /> );
    });

    var column1Films = [];
    var column2Films = [];
    var column3Films = [];
    var column4Films = [];

    if (window.innerWidth > 900) {
      (function() { for (var i = 0; i < filmsHTML.length; i++) {
        if (i % 4 === 0) {
          column1Films.push(filmsHTML[i]);
        } else if (i % 4 === 1) {
          column2Films.push(filmsHTML[i]);
        } else if (i % 4 === 2) {
          column3Films.push(filmsHTML[i]);
        } else if (i % 4 === 3) {
          column4Films.push(filmsHTML[i]);
        }
      } } )()
    } else if ((window.innerWidth > 650)) {
      (function() { for (var i = 0; i < filmsHTML.length; i++) {
        if (i % 3 === 0) {
          column1Films.push(filmsHTML[i]);
        } else if (i % 3 === 1) {
          column2Films.push(filmsHTML[i]);
        } else if (i % 3 === 2) {
          column3Films.push(filmsHTML[i]);
        }
      } } )()
    } else if ((window.innerWidth > 400)) {
      (function() { for (var i = 0; i < filmsHTML.length; i++) {
        if (i % 2 === 0) {
          column1Films.push(filmsHTML[i]);
        } else if (i % 2 === 1) {
          column2Films.push(filmsHTML[i]);
        }
      } } )()
    } else {
      column1Films = filmsHTML;
    }

    return (
      <div className="archive">
        <div
          onScroll={this.onScroll}
          className="archive_column archive_column-1"
          onMouseEnter={() => this.setState({ "scrollingColumn": 1 })}
          onMouseLeave={() => this.setState({ "scrollingColumn": 0 })}
          onTouchStart={() => this.setState({ "scrollingColumn": 1 })}>
          {column1Films}
        </div>
        <div
          onScroll={this.onScroll}
          className="archive_column archive_column-2"
          onMouseEnter={() => this.setState({ "scrollingColumn": 2 })}
          onMouseLeave={() => this.setState({ "scrollingColumn": 0 })}
          onTouchStart={() => this.setState({ "scrollingColumn": 2 })}>
          {column2Films}
        </div>
        <div
          onScroll={this.onScroll}
          className="archive_column archive_column-3"
          onMouseEnter={() => this.setState({ "scrollingColumn": 3 })}
          onMouseLeave={() => this.setState({ "scrollingColumn": 0 })}
          onTouchStart={() => this.setState({ "scrollingColumn": 3 })}>
          {column3Films}
        </div>
        <div
          onScroll={this.onScroll}
          className="archive_column archive_column-4"
          onMouseEnter={() => this.setState({ "scrollingColumn": 4 })}
          onMouseLeave={() => this.setState({ "scrollingColumn": 0 })}
          onTouchStart={() => this.setState({ "scrollingColumn": 4 })}>
          {column4Films}
        </div>
      </div>
    );
  }

}

export default Archive;
