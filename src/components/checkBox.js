// basic react component starting template
import React, { Component } from 'react';
import styled, { css } from 'styled-components'

class CheckBox extends Component {
    render() {
		 const Input = styled.input.attrs({
			  type: 'checkbox'
			})`
			  background: #cecece;
			  border-radius: 3px;
			  border: 1px solid gray;
			  color: white;
			  padding: ${props => props.padding};
			  height:20px;
			  width:20px;
			`;
			const Box = styled.div`
			  padding: 1em 1em 1em;
			  text-align:left;
			`;
		return (
		  <div className='col-lg-12'>
		    	<Input/>Test
		  </div>
		);
    }
}

export default CheckBox;