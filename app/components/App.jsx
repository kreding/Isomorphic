import React from 'react';
import { Link } from 'react-router';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                {/*<nav className="main-nav">
                    <Link className="main-nav__link" to="/">鞠学健</Link>
                    <div className="main-nav__menu-container">
                        <Link className="main-nav__link" to="/">首页</Link>
                        <Link className="main-nav__link" to="about">关于我</Link>
                    </div>
                </nav>*/}
                {this.props.children}
            </div>
        );
    }
}
