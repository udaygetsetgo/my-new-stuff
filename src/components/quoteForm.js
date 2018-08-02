// basic react component starting template
import React, { Component } from 'react';

class QuoteForm extends Component {
    render() {
		return (
		  <div className="row center-block">
               <div className="col-lg-4 col-lg-offset-4 col-md-8 col-md-offset-2">
                  <h3>Get Quote Form</h3>
                  <form>
                        <div className="form-group">
                          <label htmlFor="workingAs">I'm working as</label>
                          <input type="email" className="form-control" id="workingAsId" placeholder="Working As"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="homeLoan">My Home Loan is</label>
                          <input type="number" className="form-control" id="homeLoanId" placeholder="Home Loan"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="personalLoan">My Personal Loan is</label>
                          <input type="number" className="form-control" id="personalLoanId" placeholder="Personal Loan"/>
                        </div>
                        <div className="form-group">
                          <label htmlFor="creditCard">My Credit Card Outstanding is</label>
                          <input type="number" className="form-control" id="creditCardOutstandingId" placeholder="Credit Card Outstanding"/>
                        </div>
                        <button type="submit" className="btn btn-info">Get Quote</button>
                  </form>
               </div>
            </div>
		);
    }
}

export default QuoteForm;