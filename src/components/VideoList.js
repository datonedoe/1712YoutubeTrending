import React, {Component} from 'react';
// import Iframe from './Iframe';
import VideoCard from './VideoCard';
import './VideoList.css';

class VideoList extends Component {
  render() {
    const baseUrl="https://www.youtube.com/embed/"
    return (

        this.props.videoIdList?
        <div>
          {
            this.props.videoIdList.map((eachId, index, array) => {
              return (
                    <div key={index}>
                      <VideoCard
                        submitted={this.props.submitted}
                        videoId={eachId}
                        src={`${baseUrl}${eachId}`}
                        />
                      {index<array.lenght-1 ? <hr/>: <div style={{marginBottom: "50px"}}></div>}
                    </div>
              )
            })
          }
        </div> :
          null
    )
  }
}

export default VideoList;
