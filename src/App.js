import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
import LoanToProtect from './components/loanToProtect.js'
import GetQuote from './components/getQuote.js'
import Wrapper from './components/getQuoteWrapper.js'
import CheckBox from './components/checkBox.js'

import styled, { css } from 'styled-components'

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    this.props.defaultFunction();
  }

  render() {
    return (
        <Wrapper/>
    )
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
