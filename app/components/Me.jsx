import React from 'react';
import { Link } from 'react-router';
import window from 'window-or-global'

export default class Me extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      windowHeight: window.innerHeight
    }
  }
  componentDidMount(){
    console.log(this.state.windowHeight)
  }

  adjustVideoShape(){

  }

  render() {
    var winHeight=this.state.windowHeight;
    var headerStyle={
      width: "auto",
      height: winHeight + "px"
    }
    return (
      <header className="main-header" style={headerStyle}>
        <nav className="main-nav">
            <Link className="main-nav__link" to="/">鞠学健</Link>
            <div className="main-nav__menu-container">
                <Link className="main-nav__link" to="/">首页</Link>
                <Link className="main-nav__link" to="about">关于我</Link>
            </div>
        </nav>
        <div className="main-header-bg-wrapper">
          <div className="main-header-bg">
            <video autoPlay loop style={headerStyle}>
              <source src="http://7sbr7d.com1.z0.glb.clouddn.com/bg.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        div
      </header>
    );
  }
}
