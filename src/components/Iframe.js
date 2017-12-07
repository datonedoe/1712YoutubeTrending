import React, { Component } from 'react';
import './Iframe.css'
class Iframe extends Component {
  constructor(props) {
   super(props);
   this.state = {
     imageStatus: 'loading',
     visible: false
    };
 }

 handleImageLoaded() {
   this.setState({
     imageStatus: 'loaded',
     visible: true
    });
 }

 handleImageErrored() {
   this.setState({
     imageStatus: 'failed to load',
     visible: false
    });
 }

 componentWillReceiveProps(nextProps) {
   if (nextProps.src !==this.props.src) {
     this.setState({
       imageStatus:"loading",
       visible: false
     })
   }
 }



  render() {
   let  style = {
      visibility: this.state.visible ? "visible" : "hidden"
    };

    let iFrameDimension = {
      width: 560,
      height: 315
    }

    let loadingPosition = {
      top: `${-Math.floor(iFrameDimension.height/2)}px`,
      position: 'relative',
    }


    return (
      <div style={{textAlign: "center"}}>
        <div className="intrinsic-container intrinsic-container-16x9">
          <iframe
                    title="Some title"
                    width= {`${iFrameDimension.width}`}
                    height= {`${iFrameDimension.height}`}
                    src={this.props.src}
                    frameBorder="0"
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)}
                    style={style}
                    allowFullScreen
                    >
          </iframe>


        </div>



        {!this.state.visible ?
          <div
          className="loading"
          style={{...loadingPosition}}
          >
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div> : null}
          {/*<p>Submit status: {this.props.submitted}</p>
         <p>Status: {this.state.imageStatus}</p> */}

      </div>
    )
  }
}

export default Iframe;
