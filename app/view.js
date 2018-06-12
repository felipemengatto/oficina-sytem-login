import Routes from './router';

export default class View {
	constructor() {
		this.el = document.getElementById('view');
		window.onhashchange = this.hashChanged.bind(this);
	}

	isLogged() {
		return Boolean(localStorage.getItem('authenticated'));
	}

	render(template) {
		if (template) {
			this.el.innerHTML = template;
		}
	}

	hashChanged() {
		if (window.location.hash.length > 0) {

			const routeName = window.location.hash;

			if (Routes[routeName].private) {

				if (this.isLogged()) {
					this.render(Routes[routeName].template);
					return;
				}

				this.render(Routes['#default'].template);
				return;
			}

			this.render(Routes[routeName].template);

		} else {
			this.render(Routes['#default'].template);
		}
	}
}
