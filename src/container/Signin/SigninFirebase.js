

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Fab, Box, Typography, Divider } from "@material-ui/core";
import { CustomCard } from 'components/GlobalComponents';

class SigninFirebase extends Component {
	//constructor
	constructor(props) {
		super(props);
		this.state = {
			formErrors: {
				blankEmail: false,
				invalidEmail: false,
				blankPassword: false
			}
		}
	}
	/**
	 * Function to login user using Firebase
	 */
	// async onUserLogin() {
	// 	const { email, password } = this.props;
	// 	let fieldValidationErrors = this.state.formErrors;
	// 	// if (email === "") { fieldValidationErrors.blankEmail = true; }
	// 	if (password === "") { fieldValidationErrors.blankPassword = true; }
	// 	// if (!this.validateEmail(email)) { fieldValidationErrors.invalidEmail = true; }
	// 	await this.setState({
	// 		formErrors: fieldValidationErrors
	// 	})
	// 	if (email !== '' && password !== '') {
	// 		var userDetails = { email, password }
	// 		this.props.signinUserWithFirebase(userDetails, this.props.history);
	// 		this.props.signInWithAuthToken(userDetails, this.props.history);
	// 	}
	// }

	// /**
	//  * Function to detect email changes
	//  */
	// onEmailChanged(e) {
	// 	let fieldValidationErrors = this.state.formErrors;
	// 	fieldValidationErrors.blankEmail = false;
	// 	// fieldValidationErrors.invalidEmail = false;
	// 	this.setState({ formErrors: fieldValidationErrors })
	// 	this.props.onEmailChanged(e.target.value);
	// }

	// /**
	//  * Function to detect login password changes
	//  */
	// onPasswordChanged(e) {
	// 	let fieldValidationErrors = this.state.formErrors;
	// 	fieldValidationErrors.blankPassword = false;
	// 	this.setState({ formErrors: fieldValidationErrors });
	// 	this.props.onPasswordChanged(e.target.value);
	// }

	// /**
	// * Function is use for check the email validation.
	// */
	// validateEmail(email) {
	// 	let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	// 	return emailValid;
	// }

	/**
	 * Function to show error
	 */
	renderError() {
		if (this.props.error) {
			return (
				<div style={{ backgroundColor: 'white' }}>
					<TextField>{this.props.error}</TextField>
				</div>
			);
		}
	}

	/**
	 * On User Sign Up
	 */
	onUserSignUp() {
		this.props.history.push('/signup');
	}
	onForgotPassword() {
		this.props.history.push('/forgot-password');
	}

	render() {
		const { blankEmail, blankPassword, invalidEmail } = this.state.formErrors;
		const { email, password, error, isDarkModeActive } = this.props;
		return (
			<div>
				<div className="session-wrapper session-wrapper-v2">
					<Box className="session-box" mx="auto" display="flex" justifyContent="center" alignItems="center">
						<Box width="100%">
							<Box textAlign="center" className="session-logo" >
								{isDarkModeActive ?
									<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-light.png`).default} />
									:
									<img className="img-fluid" alt="img" width="100" src={require(`assets/Images/hulk-dark.png`).default} />
								}
							</Box>
							<CustomCard>
								<form className="login-form text-center">
									<Typography variant="subtitle2" >Log in to continue to :</Typography>
									<Typography variant="subtitle2" color="textPrimary" className="fw-500">Hulk</Typography>
									<Box my={3}>
										<TextField
											required
											fullWidth
											variant="outlined"
											id="username"
											type="email"
											name="email"
											placeholder="Please enter your email address."
											className="outlined-input"
											value={email}
											onChange={(email) => this.onEmailChanged(email)}
											// error={blankEmail || invalidEmail || error ? true : false}
										/>
										{/* {blankEmail &&
											<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>Email cannot be empty.</Box>
										}
										{!blankEmail && invalidEmail &&
											<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>The email address is badly formatted.</Box>
										} */}
									</Box>
									<Box mb={3}>
										<TextField
											required
											fullWidth
											variant="outlined"
											id="login-password"
											placeholder="Please enter your login password."
											className="outlined-input"
											type="password"
											value={password}
											error={blankPassword || error ? true : false}
											// onChange={this.onPasswordChanged.bind(this)}
										/>
										{blankPassword &&
											<Box component="span" color="error.main" textAlign="left" display="block" fontSize="subtitle2.fontSize" pt={1}>Password cannot be empty</Box>
										}
									</Box>
									<Box mb="20px">
										{/* <Button
											color="primary"
											className="btn-block blockBtn w-100"
											variant="contained"
											size="large"
											onClick={this.onUserLogin.bind(this)}
										>
											Sign In
										</Button> */}
									</Box>
									<Typography variant="subtitle2">Sign in with</Typography>
									{/* <div className="social-login-wrapper">
										<div className="social-list">
											<Fab size="small" variant="circular" className="text-white facebook-color"
												onClick={() => this.props.signinUserWithFacebook(this.props.history)}
											>
												<i className="fab fa-facebook-f"></i>
											</Fab>
											<Fab size="small" variant="circular" className="text-white google-color"
												onClick={() => this.props.signinUserWithGoogle(this.props.history)}
											>
												<i className="fab fa-google-plus-g"></i>
											</Fab>
											<Fab size="small" variant="circular" className="text-white twitter-color"
												onClick={() => this.props.signinUserWithTwitter(this.props.history)}
											>
												<i className="fab fa-twitter"></i>
											</Fab>
											<Fab size="small" className="text-white github-color"
												onClick={() => this.props.signinUserWithGithub(this.props.history)}
											>
												<i className="fab fa-github-alt"></i>
											</Fab>
										</div>
									</div> */}
									<Divider></Divider>
									<Box display="flex" justifyContent="center" alignItems="center" pt={2}>
										<Box fontSize="subtitle2.fontSize" className="border-right" pr={1}>
											<Box style={{ cursor: 'pointer' }} color="primary.main" onClick={() => this.onForgotPassword()}>Can't log in ?</Box>
										</Box>
										<Box fontSize="subtitle2.fontSize" pl={1}>
											<Box style={{ cursor: 'pointer' }} color="primary.main" onClick={() => this.onUserSignUp()}>Sign up for an account</Box>
										</Box>
									</Box>
								</form>
							</CustomCard>
						</Box>
					</Box>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ authUser, settings }) => {
	const { loading, email, password, error } = authUser;
	const { isDarkModeActive } = settings;
	return { loading, email, password, error, isDarkModeActive };
};

export default connect(mapStateToProps, {
	// signinUserWithFirebase,
	// onEmailChanged,
	// onPasswordChanged,
	// signinUserWithGoogle,
	// signinUserWithFacebook,
	// signinUserWithTwitter,
	// signinUserWithGithub
})(SigninFirebase);
