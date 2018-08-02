import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoanToProtect from '../components/loanToProtect.js'
import CheckBox from '../components/checkBox.js'
import styled, { css } from 'styled-components'

class GetQuote extends Component {

  render() {
    const initialJson = [{
      'title': 'Home Loans',
      'textboxTitle': 'Debt Amount',
      'amount': '$50,000',
      'coverageTitle': '% of Coverage',
      'coverageValue': '25'
    },
    {
      'title': 'Personal Loans',
      'textboxTitle': 'Debt Amount',
      'amount': '$30,000',
      'coverageTitle': '% of Coverage',
      'coverageValue': '55'
    },
    {
      'title': 'Credit Cards',
      'textboxTitle': 'Debt Amount',
      'amount': '$40,000',
      'coverageTitle': '% of Coverage',
      'coverageValue': '75'
    },
    {'totalProtection': '$120,000'}
    ];

    const BoxQuote = styled.div`
        margin: 1em 1em 2em;
        text-align:left;
        background: #cecece;
        border-radius: 10px;
        border: 1px solid gray;
        color: white;
        height:100%;
      `;
    const Label = styled.label`
        font-weight: 700;
        text-align:center;
        text-align:-webkit-center;
        font-size: 1.1em;
      `;
      const Box = styled.div`
        padding: 1em 1em 1em;
        text-align:left;
        width:90%;
        margin:auto;
      `;
    return (
      <Box>
        <div className="row">
          <div className='col-lg-9 col-md-9'>
            <div className="row">
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                  <Label>Loans To Protect</Label>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                  <Label>Total Protection: {initialJson[3].totalProtection}</Label>
                </div>
              </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <LoanToProtect data={initialJson}/>
            </div>
          </div>
          <hr />
          <div>
            <Label>What covers would you like</Label>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <CheckBox data={initialJson}/>
            </div>
          </div>
        </div>
        <div className='col-lg-3 col-md-3'>
          <BoxQuote>
          Test
          </BoxQuote>
        </div>
       </div>
      </Box>
    )
  }
}

export default GetQuote;
