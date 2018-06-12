import axios from 'axios';

export default class Login {

	constructor() {
		window.loginAuth = this.loginAuth;
	}

	loginAuth() {
		const data = {
			email: document.FormLogin.email.value,
			senha: document.FormLogin.password.value,
		};

		axios.post('http://localhost:3000/login', data)
			.then(function ({data}) {
				
				if (data.authenticated) {
					localStorage.setItem('authenticated', data.authenticated);
					window.location.hash = '#dashboard';
				}

			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return `
			<div class="w-25">
				<form name="FormLogin" onsubmit="return false;">
				    <div class="form-group">
				        <label for="email-input">E-mail</label>
				        <input name="email" type="text" class="form-control" id="email" placeholder="E-mail">
				    </div>
				    <div class="form-group">
				        <label for="password-input">Senha</label>
				        <input name="password" type="text" class="form-control" id="password" placeholder="password">
				    </div>
				    <input type="submit" 
				    	onClick="loginAuth();"
				    	value="Login" class="btn btn-primary"></input>
				</form>
			</div>
		`;
	}

}