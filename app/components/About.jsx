import React from 'react';
import { Link } from 'react-router';

export default class About extends React.Component {

    render() {
      let textStyle={'text-align': 'middle'};
      return (
        <div className="about">
          <h1 className="about__heading">鞠学健</h1>

          <div style={textStyle}>Welcome, everybody!</div>
        </div>
      );
    }
}
