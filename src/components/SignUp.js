import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	p {
		margin: 0
	}
	@media (max-width: 400px) {

	}
`;

const Overlay = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: #00000040;
`;

const ModalContainer = styled.div`
	width: 30%;
	min-height: 100px;
	text-align: center;
	background: #FFF;
	border-radius: 4px;
	box-shadow: 2px 2px 2px 0px #00000050;
`;

const Input = styled.input`
	border-color: ${props => props.erro && 'red'};
`;


export default class SingUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			erro: '',
			modalOpen: false,
		}
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		
		if (this.state.password === this.state.password2) {
			this.props.criarConta(this.state.name, this.state.email, this.state.password);
			this.setState({
				createSuccess: true,
				erro:'',
			});
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

	renderModal = () => (
		<Overlay onClick={() => this.setState({createSuccess: false})}>
			<ModalContainer>
				<p>Conta criada com sucesso!</p>
				<button onClick={() => this.props.clickCriarconta('login')}>Fazer login</button>
			</ModalContainer>
		</Overlay>
	)

	render() {
		const { createSuccess } = this.state;
		return (
			<>
				<Form onSubmit={this.handleSubmit}>
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
						<Input
							required
							type='password'
							placeholder='123'
							onChange={this.changePassword}
							erro={this.state.erro}
						/>
					</label>
					<label>
						<p>Confirmação de senha</p>
						<Input
							value={this.state.password2}
							required
							type='password'
							placeholder='123'
							onChange={this.changePassword2}
							erro={this.state.erro}
						/>
					</label>
					<button>Entrar</button>
					<p>{this.state.erro}</p>
					<p onClick={() => this.props.clickCriarconta('login')}>Fazer login</p>
				</Form>
				{createSuccess && this.renderModal()}
			</>
		)
	}
}