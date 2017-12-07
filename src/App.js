import React, { Component } from 'react';
import './App.css';
import codeFile from './data/slim-2.json';
import { Form} from 'react-bootstrap'
import VideoList from './components/VideoList';
import Footer from './components/Footer';
import Header from './components/Header';

const API = "AIzaSyAsfyMPKCelBsvTONSdar3RwqzE04WNask"
// https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=VN&maxResults=25&key=AIzaSyAsfyMPKCelBsvTONSdar3RwqzE04WNask
class App extends Component {
  constructor(props) {
    super(props);
    // console.log("[contructor]");
    this.state = {
      countryList: [],
      codeList: [],
      value: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    let countryList =[];
    let codeList=[];

    codeFile.forEach(each => {
        countryList = [...countryList, each.name]
        codeList=[...codeList, each["alpha-2"]]
    });

    let defaultCountry = "United States of America";
    var index= countryList.indexOf(defaultCountry);

    this.setState({
      countryList: countryList,
      codeList: codeList,
      value: defaultCountry,
      regionCodePicked: codeList[index]
    })
  }

  handleSubmit = (event) => {
    this.setState({
      submitted: true,
    })
    event.preventDefault();
  }

  handleChange = (event) => {
    var index= this.state.countryList.indexOf(event.target.value);
    // console.log("change!")
    this.setState({
      value: event.target.value,
      regionCodePicked: this.state.codeList[index],
      submitted: false
    });

  }

  getTrendingVideo = () =>{
    if (this.state.submitted===false) return;
    let videoIdList = []
    let regionCode = this.state.regionCodePicked;
    let maxResults = 10;
    let finalURL = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${API}${"&showinfo=0"}`

    fetch(finalURL)
      .then(response => response.json())
      .then(response => {
        videoIdList = response.items.map(each => each.id);

        this.setState({
          submitted: false,
          videoIdList: videoIdList
        },
        this.setState({
          appExecutedOnce: true
        })
      )
      })
      .catch(err => console.log("[getTrendingVideo] ERROR:", err));
  }



  render() {
    return (
      <div className="AppComponent">
        <Header />
        <Form onSubmit={this.handleSubmit} className="search-form">
            <label>
              <span className="PickACountry">Pick a country</span>
              <select value={this.state.value} onChange={this.handleChange}>
                {this.state.countryList.map((eachCountryName, index) => {
                  return <option key={eachCountryName} value={eachCountryName}>{eachCountryName}</option>
                })}
              </select>
            </label>
            { ' '}
            <input className="go-button" type="submit" value="      Go!      " />
        </Form>

          {
              (this.state.submitted ===true) ? this.getTrendingVideo() :null
          }

          <VideoList submitted={this.state.submitted?"true":"false"} videoIdList={this.state.videoIdList} />
          <Footer appExecutedOnce={this.state.appExecutedOnce ? true : false}/>
    </div>
    );
  }
}

export default App;
