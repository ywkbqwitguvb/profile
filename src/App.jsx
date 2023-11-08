import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Bolu George",
        bio: "A Frontend developer",
        imgSrc: "data:image/jpeg;base64,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",
        profession: "Software Engineer"
      },
      show: true,
      timeInterval: 0,
    };

    this.intervalID = null;
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleProfile}>
          Toggle Profile
        </button>
        {this.state.show && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
