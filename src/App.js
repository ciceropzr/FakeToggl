import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';
import Timers from './components/Timers';
import Signup from './components/SignUp';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentScreen: 'login',
			user: {
				name: '',
				email: '',
				password: '',        
			},
		}
	}

	criarConta = (name, email, password) => {
		this.setState({
			user: {
				name: name,
				email: email,
				password: password,
			},
			currentScreen: 'login',
		});
	}

	clickCriarconta = (screen) => {
		this.setState({
			currentScreen: screen
		})
	}

	comparacao = (email, password) => {
		if (email === this.state.user.email && this.state.user.password === password) {
			this.setState({
				currentScreen: 'timers'
			});
		}
	}

	renderScreen = () => {
		switch(this.state.currentScreen) {
			case 'timers':
				return <Timers/>;
			case 'signup':
				return <Signup clickCriarconta={this.clickCriarconta} criarConta={this.criarConta}/>
			case 'login':
			default:
				return <Login clickCriarconta={this.clickCriarconta} comparacao={this.comparacao}/>;
		}
	}

	render() {
		return (
			<div>
				{this.renderScreen()}
			</div>
		)
	}
}

export default App;
