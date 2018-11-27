import React, { Component } from 'react';
import Base from 'terra-base';
import Hyperlink from 'terra-hyperlink'
import logo from './logo.svg';
import {
  I18nProvider, i18nLoader, injectIntl, intlShape, FormattedMessage, IntlProvider,
} from 'terra-i18n';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Base locale="en-US"> 
            <a className="hlink" href="#yellow">yellow</a>
            <a className="hlink" href="#blue">blue</a>
            <a className="hlink" href="#red">red</a>
          </Base>
          <div id={"green"} className="">Green</div>
          <br />
          <div id={"blue"} className="">Blue</div>
          <br />
          <div id={"red"} className="">Red</div>
          <br />
          <div id={"yellow"} className="">yellow</div>
          <br />

        </header>
      </div>
    );
  }
}

export default App;
