import React from 'react'

const images = [
  "https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://cdn.pixabay.com/photo/2016/11/29/03/01/backboard-1866968_1280.jpg"
]

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 5000);
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { currentImg } = this.state;
    const numOfImages = images.length;

    if (currentImg !== numOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }
    this.setState({ currentImg: newCurrentImg });
  }

  render() {

    const { currentImg } = this.state;
    const urlString = `url('${images[currentImg]}')`;

    return (
      <div className="splash-wrapper">
        <div className="splash-background" style={{ backgroundImage: urlString, width: 1000, height: 800 }}></div>
      </div>
    )
  }
}