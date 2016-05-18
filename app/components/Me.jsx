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
    window.addEventListener('resize', this.adjustVideoShape.bind(this));
  }

  adjustVideoShape(){
    let headerEle = this.refs.header;
    let videoEle = this.refs.bg_video;
    let radio = window.innerWidth / window.innerHeight;

    if(radio > 1.78){
      headerEle.style.height = "auto";
      headerEle.style.width = window.innerWidth + "px";

      videoEle.style.height = "auto";
      videoEle.style.width = window.innerWidth + "px";
    }else{
      headerEle.style.width = "auto";
      headerEle.style.height = window.innerHeight + "px";

      videoEle.style.width = "auto";
      videoEle.style.height = window.innerHeight + "px";
    }
  }

  render() {
    let winHeight=this.state.windowHeight;
    let headerStyle={
      width: "auto",
      height: winHeight + "px"
    }
    return (
      <header className="main-header" style={headerStyle} ref="header">
        <nav className="main-nav">
            <Link className="main-nav__link" to="/">鞠学健</Link>
            <div className="main-nav__menu-container">
                <Link className="main-nav__link" to="/">首页</Link>
                <Link className="main-nav__link" to="about">关于我</Link>
            </div>
        </nav>
        <div className="main-header-bg-wrapper">
          <div className="main-header-bg">
            <video autoPlay loop style={headerStyle} ref="bg_video">
              <source src="http://7sbr7d.com1.z0.glb.clouddn.com/bg.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        div
      </header>
    );
  }
}
