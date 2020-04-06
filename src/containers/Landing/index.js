import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './Landing.scss';
import {SIDE_PAGES, SPACE_HOLDER} from 'constants.tsx';

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  buildContent = () => {
    let res = [];
    // build div for each side page
    for (let i = 0; i < SIDE_PAGES.length; i++) {
      const subpage_title = SIDE_PAGES[i].replace(SPACE_HOLDER, ' ');
      const subpage_path = '/' + SIDE_PAGES[i];
      res.push(
        <div className='content-tab'>
          <Link to={subpage_path}>
            <h1>{subpage_title}</h1>
          </Link>
        </div>
      );
    }
    return (
      <div id='content-container'>
        {res}
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div id='landing-container'>         
          {this.buildContent()}
        </div>
        <Footer />
      </Fragment>
    );
  }
}
