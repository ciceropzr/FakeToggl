import React from 'react';
import '../App.css';


export default class SingUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			erro: '',
		}
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		
		if (this.state.password === this.state.password2) {
			this.props.criarConta(this.state.name, this.state.email, this.state.password);
		} else {
			this.setState({erro:'senha incorreta'});
		}
	}

	changeName = (event) => {
		this.setState({
			name: event.target.value,
		})
	} 
	
	changeEmail = (event) => {
		this.setState({
			email: event.target.value,
		})
	}

	changePassword = (ev) => {
		this.setState({ 
			password: ev.target.value 
		})
	}

	changePassword2 = (ev) => {
		this.setState({ 
			password2: ev.target.value 
		})
	}

	render() {
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<label>
						<p>Nome</p>
						<input
							required
							autoFocus
							type='text'
							onChange={this.changeName}						
							placeholder='Chefe Mor'
						/>
					</label>
					<label>
						<p>Email</p>
						<input
							required
							type='email'
							onChange={this.changeEmail}						
							placeholder='brabo@chefe.com'
						/>
					</label>
					<label>
						<p>Senha</p>
						<input
							required
							type='password'
							placeholder='123'
							onChange={this.changePassword}
						/>
					</label>
					<label>
						<p>Confirmação de senha</p>
						<input
							value={this.state.password2}
							required
							type='password'
							placeholder='123'
							onChange={this.changePassword2}
						/>
					</label>
					<button>Entrar</button>
					<p>{this.state.erro}</p>
				</form>
				<button onClick={() => this.props.clickCriarconta('login')}>Crica Aki</button>
			</>
		)
	}
}