// basic react component starting template
import React, { Component } from 'react';
import GetQuote from './getQuote.js'
import styled, { css } from 'styled-components'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import {Carousel} from 'react-bootstrap';
import QuoteForm from './quoteForm.js'
class Wrapper extends Component {
    render() {
		return (
			<div>
              <Tabs className="nav-menu">
                <Tab label="Home">
                    <Carousel>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../images/are-you-covered.png" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../images/insurance.png" />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src="../images/insurance-all.png" />
                      </Carousel.Item>
                    </Carousel>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">99%</div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">10K</div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">Over 3M Families Covered</div>
                    </div>
                    <QuoteForm/>
                </Tab>
                <Tab label="Get Quote">
                    <GetQuote/>
                </Tab>
              </Tabs>
            </div>
		);
	}
}

export default Wrapper;