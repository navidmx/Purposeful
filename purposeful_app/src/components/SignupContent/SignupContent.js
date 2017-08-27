import React, { Component } from 'react';
import SignupForm from '../SignupForm/SignupForm.js';
import SignupThanks from '../SignupThanks/SignupThanks.js';
import './SignupContent.css';

class SignupContent extends Component {

	constructor (props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleFormSubmit = this.handleFormSubmit.bind(this);
	    this.handleFormReset = this.handleFormReset.bind(this);
	    this.state = {
			first: '',
			last: '',
			email: '',
			interest: '',
			isSignedUp: false
	    };
	}

	/* updates the state when the user changes any input in the form */
	handleInputChange(event) {
		this.setState(event);
	}

	/* submits the form data to the Firebase mailing list */
	handleFormSubmit() {
		let newEntry = {
            "first": this.state.first,
            "last": this.state.last,
            "email": this.state.email,
            "interest": this.state.interest
		};

		let newUidRef = this.props.mlRef.push();

		/* send data to Firebase mailing list. entry stored at auto generated UID */
		let p1 = new Promise ( (resolve, reject) => {
			newUidRef.set(newEntry);
			resolve("Success!");
		});

		p1.then( msg => {
			alert("You have sucessfully joined our mailing list!");
			this.setState({isSignedUp: true});
		});

	}

	/* clear the form data and show form */
	handleFormReset() {
		this.setState({
			first: '',
			last: '',
			email: '',
			interest: '',
			isSignedUp: false
		});
	}

	render () {
		/* conditionally render form content depending on whether youve signed up or not */
		return (
			<article className="signup-content">
				{
					this.state.isSignedUp ?
			        <SignupThanks
                        onClick={this.handleFormReset}
                        firstName={this.state.first}
                    /> :
			        <SignupForm
                        handleGoogle={this.handleInputChange}
                        handleFacebook={this.handleInputChange}
                        handleEmail={this.handleInputChange}
                        onClick={this.handleFormSubmit}
                    />
			    }
			</article>
        );
	}
}

export default SignupContent;
