
import React from 'react';
import music from '../../assets/journey.mp3';

class Music extends React.Component {
  state = {
    play: false
  }
  audio = new Audio(music)

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>
    );
  }
}

export default Music;