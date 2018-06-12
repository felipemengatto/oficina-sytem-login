export default class Dashboard {

	constructor() {
		window.logout = this.logout;
	}

	logout() {
		localStorage.clear();
		window.location.hash = '#home';
	}

	render() {
		return `
			<div class="info">
				<p>Parabéns você está logado, você pode sair clicando aqui 
					<button onclick="logout();" class="btn btn-warning"> Sair </button>
				</p>
			</div>
		`;
	}

}