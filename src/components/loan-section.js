// basic react component starting template
import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import Txtbox from './textBox.js'
import ProgresBar from './progressBar.js'

class LoanSection extends Component {
    render() {
    	const Box = styled.div`
			  padding: 1em 1em 1em;
			  text-align:left;
			`;
		const Label = styled.label`
			  font-weight: 700;
			  text-align:center;
			  text-align:-webkit-center;
			  padding-bottom: 1em;
			`;
		return (
		  <div>
		  	<Box>
		  		<Label><span className="glyphicon glyphicon-home"></span>{this.props.data.title}</Label>
		  		<Txtbox title={this.props.data.textboxTitle} value={this.props.data.amount}/>
		  		<ProgresBar title={this.props.data.coverageTitle} value={this.props.data.coverageValue}/>
		  	</Box>		  	
		  </div>
		);
    }
}

export default LoanSection;