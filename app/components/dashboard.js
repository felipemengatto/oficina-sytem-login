export default class Dashboard {

	constructor() {
		window.logout = this.logout;
	}

	logout() {
		localStorage.clear();
		window.location.hash = '#home';
	}

	bind() {

		document.getElementById('logout').addEventListener('click', () => {
			this.logout();
		});

	}

	render() {
		return `
			<div class="alert alert-success">
				Parabéns você está logado, você pode sair clicando aqui: 
					<button id="logout" class="btn btn-outline-dark"> Sair do Sistema </button>
			</div>
		`;
	}

}