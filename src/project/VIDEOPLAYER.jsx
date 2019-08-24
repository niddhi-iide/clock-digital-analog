import React, { Component } from 'react';

class VideoPlayer extends Component {
  state = { playing: false }

  videoEl = null;

  onClickPlay = () => {
    if (this.videoEl) {
      this.videoEl.play();
    }
    this.setState({ playing: true });
  }

  onClickPause = () => {
    if (this.videoEl) {
      this.videoEl.pause();
    }
    this.setState({ playing: false });
  }


  render() {
    const { playing } = this.state;
    return (
      <div>
        <video
          // ref access the dom element
          ref={(el) => { this.videoEl = el; }}
          controls
          className="video-player"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <div>
          <button
            type="button"
            onClick={this.onClickPlay}
          >
          Play
          </button>
          <button
            type="button"
            onClick={this.onClickPause}
          >Pause
          </button>
        </div>
        {playing ? 'Playing' : 'paused'}
      </div>
    );
  }
}

export default VideoPlayer;
