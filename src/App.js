import React from "react";
import Nav from "./components/Nav";
import SoundPlayer from "./components/Sound/Sound";
import Music from "./components/Sound/Music";
import soundfile from './assets/journey.mp3';
import Home from "./components/Home";
import Selector from "./components/Selector";
import { Route } from "react-router-dom";
import { getCategories, getImage, getCurrent } from "./services/api-helper";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      selectedValueId: "",
      imageUrl: "",
      timerState: ""
    };
    let audio = new Audio(soundfile);
  }

  async componentDidMount() {
    // const voice = await getVoice();
    const news = await getCurrent();
    this.setState({
      news
    });
  }

  handleChange = e => {
    let selectValId = e.target[e.target.selectValId].id;
    this.setState({
      selectValId
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const imageUrl = await getImage(this.state.selectedValueId);
    this.setState({
      imageUrl
    });
  };


  render() {
    return (
      <div className="app">
        <header>
          <Nav />
        </header>
        {/* <Voice/> */}

        <main>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/selector"
            render={() => (
              <Selector
                news={this.state.news}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                // imageUrl={this.state.imageUrl}
              />
            )}
          />
        </main>

        <Music />
 

        <div>
          <audio ref="audio_tag" scr="./assets/journey.mp3" autoPlay />
        </div>

        <button onClick={this.alert}>Alert</button>

        <footer>
          <h2>Contact me</h2>
          <div id="contact"></div>
          <p>
            <span className="bold">Email:</span>
            Check it out, I'm me
          </p>
          <div>
            <small>&copy; 2019</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
