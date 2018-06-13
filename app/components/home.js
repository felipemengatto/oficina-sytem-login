export default class Home {

	constructor() { 
		this.isLogged();
	}

	isLogged() {
		if (Boolean(localStorage.getItem('authenticated'))) {
			window.location.hash = '#dashboard';
		}
	}

	bind() {
	}

	render() {
		return `
			<div class="alert alert-info text-center">
				Você não está logado, faça <a href="#login">Login</a>
			</div>
		`;
	}
}