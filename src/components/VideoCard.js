import React, { Component } from 'react';
import Iframe from './Iframe';
import VideoInfo from './VideoInfo';
import moment from 'moment';
const API = "AIzaSyAsfyMPKCelBsvTONSdar3RwqzE04WNask"
// https://www.googleapis.com/youtube/v3/videos?id=X21n9IkoXWA&part=snippet&key=AIzaSyAsfyMPKCelBsvTONSdar3RwqzE04WNask

class VideoCard extends Component {

  constructor(props) {
    super(props);

    // console.log("[VideoCard] constructor")
    this.state = {

    }
  }
  // shouldComponentUpdate(a, b) {
  //   console.log("[VideoCard] shouldComponentUpdate")
  //   console.log("a", a)
  //   console.log("b", b)
  //   return true;
  // }

  getIndividualVideoInfo = (videoId) => {
    let eachVideoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${API}`
    fetch(eachVideoUrl)
    .then(response => {
      return response.json();
    })
    .then(response => {
      let date = moment(response.items[0].snippet.publishedAt).format('MMM DD, YYYY');;
      this.setState( {
        channelTitle: response.items[0].snippet.channelTitle,
        publishedAt: date,
        title: response.items[0].snippet.title
      })

    })
    .catch(err => {
      // console.log("[VideoCard - componentWillMount]", err);
    })
  }

  componentWillMount(){
    // console.log("[VideoCard] componentWillMount")
    this.getIndividualVideoInfo(this.props.videoId);


  }

  componentWillReceiveProps(nextProps) {
    // console.log("[VideoCard] componentWillReceiveProps");
    // console.log("nextProps", nextProps);
    this.getIndividualVideoInfo(nextProps.videoId);

  }
  componentDidMount () {

  }

  render() {
    // console.log("[VideoCard] render")

    return (
      <div className="videoCard">
        <Iframe submitted={this.props.submitted} src={this.props.src}/>
        <VideoInfo
          publishedAt={this.state.publishedAt}
          channelTitle={this.state.channelTitle}
          title={this.state.title}
          />
      </div>
    )
  }
}

export default VideoCard;
