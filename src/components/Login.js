import React from 'react';

export default class Login extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			email: '',
			senha: '',
		}

	}

	changeEmail = (event) => {
		this.setState ({
			email: event.target.value,
		})
	}

	changeSenha = (event) => {
		this.setState ({
			senha: event.target.value,

		})
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.props.comparacao(this.state.email, this.state.senha)
	}

	render() {
		return (
			<div className='div-login'>
				<form onSubmit={this.handleSubmit} className='form-login'>
					<label className='label-login'>
						Usuario
						<input onChange={this.changeEmail} placeholder='name@email.com' required className='input-login' autoFocus/>
					</label>
					<label className='label-login'>
						Senha
						<input onChange={this.changeSenha} placeholder='1234' required className='input-login' type='password'/>
					</label>
						<button className='form-button'>Entrar</button>
				</form>
				<button onClick={() => this.props.clickCriarconta('signup')}>
					Create Account
				</button>
			</div>
		)
	}
}