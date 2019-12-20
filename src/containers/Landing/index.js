import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './Landing.scss';

const elems = [];

export default class Landing extends Component {
  constructor(props) {
    super(props);
  }

  buildTabs = () => {
    let res = [];
    for (let i = 0; i < elems.length; i++) {
      res.push(
        <div className='content-tab'>
          <h1>{elems[i]}</h1>
        </div>
      );
    }
    return res;
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div id='landing-container'>          
          {this.buildTabs()}     
          <h3 style={{fontSize: 60}}>{'UNDER CONSTRUCTION'}</h3>
        </div>
        <Footer />
      </Fragment>
    );
  }
}