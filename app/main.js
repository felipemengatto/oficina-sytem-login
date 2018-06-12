import View from './view';

class App {
	constructor() {
		this.view = new View();
	};
	init() {
		this.view.hashChanged();
	};
}

const app = new App();

window.addEventListener('load', () => app.init());