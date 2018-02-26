import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PageHeader extends Component {
  handleToggleNavMenu() {
    document.getElementById('main').classList.toggle('opened');
  }

  render() {
    return (
      <header className="header white">
        <div className="header__wrap">
          <div className="wrap">
            <a className="header__logo" href="/">
              <div className="header__logo-i">
                Logo
              </div>
            </a>
            <div className="header__nav">
              <div className="header__nav-i" onClick={ this.handleToggleNavMenu }>
                <div className="header__nav-inner"></div>
              </div>
              <nav className="header__nav-block">
                <a href="#">Page1</a>
                <a href="#">Page2</a>
                <a href="#">Page3</a>
              </nav>
            </div>
          </div>
        </div>
        <div className="delimeter" />
      </header>
    )
  }
}

export default PageHeader;
