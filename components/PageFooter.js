import React, { Component } from 'react'

export default class PageFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="delimeter" />
        <div className="wrap" data-aos="fade">
          <div className="footer__wrap">
            <div className="footer__block footer__block_1"><a className="footer__logo" href="#">
              Logo
            </a>
              <div className="footer__copy">Copyright 2018</div>
            </div>
            <div className="footer__block footer__block_3">
              <form className="footer__subscribe js-form js-form__standart" method="get" name="subscribe_footer">
                <input className="field" type="email" placeholder="Enter email" name="email" required />
                <input className="button button_s button_dark" type="submit" value="SUBSCRIBE" />
              </form>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
