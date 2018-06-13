import axios from 'axios';
import swal from 'sweetalert';

export default class Login {

	constructor() {
        this.isLogged();
	}

    isLogged() {
        if (Boolean(localStorage.getItem('authenticated'))) {
            window.location.hash = '#dashboard';
        }
    }

	loginAuth() {
		const data = {
			email: document.FormLogin.email.value,
			senha: document.FormLogin.password.value,
		};

		axios.post('http://oficina.oincriveleduardo.com.br/login', data)
			.then(function ({data}) {
				
				if (data.authenticated) {
					localStorage.setItem('authenticated', data.authenticated);
					window.location.hash = '#dashboard';
				} else {
					swal('Ops!', 'Usuário ou Senha Incorretos!', 'error');
				}

			});
	}

	bind() {

		document.getElementById('loginAuth').addEventListener('click', () => {
			this.loginAuth();
		});

	}

	render() {
		return `
				<div class="row justify-content-center">
					<div class="col-6">
						<div class="card mt-5">
							<div class="card-body">
								<h5 class="card-title text-center">Login</h5>
								<form name="FormLogin" onsubmit="return false;">
								    <div class="form-group">
								        <label for="email-input">E-mail</label>
								        <input name="email" type="text" class="form-control" id="email" placeholder="bolachinhavoavoa@gmail.com">
								    </div>
								    <div class="form-group">
								        <label for="password-input">Senha</label>
								        <input name="password" type="password" class="form-control" id="password" placeholder="************">
								    </div>
								    <input type="submit" id="loginAuth"
								    	value="Login" class="btn btn-primary"></input>
								</form>
							</div>
						</div>
					</div>
				</div>
		`;
	}

}