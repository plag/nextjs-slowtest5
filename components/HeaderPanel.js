import React, { Component } from 'react'

export default class HeaderPanel extends Component {
  handleClose() {
    document.getElementById('main').classList.toggle('opened');
  }
  render() {
    return (
      <div>
        <div className="nav__overlay" onClick={ this.handleClose }></div>
        <div className="nav__container">
          <div className="nav__close" onClick={ this.handleClose }>></div>
          <nav className="nav__list">
            <a className="current" href="#">Home</a>
            <a href="#">Page1</a>
            <a href="#">Page2</a>
            <a href="#">Page3</a>
          </nav>
          <div className="nav__footer"><a className="button" href="#">Instruction</a>
            <nav className="footer__soc">
              <a href="#">
                Medium
              </a>
              <a href="#">
                Facebook
              </a>
              <a href="#">
                Twitter
              </a>
              <a href="#">
                Slack
              </a>
              <a href="#">
                Email
              </a>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
