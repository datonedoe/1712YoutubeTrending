import React, { Component } from 'react';
import './VideoInfo.css';

class VideoInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row bordered">
          <div className="videoInfo">
            <p><strong>{this.props.title}</strong></p>
            <p>{this.props.channelTitle}</p>
            <p>{this.props.publishedAt}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoInfo;
