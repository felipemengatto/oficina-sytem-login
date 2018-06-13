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

			if (!Routes[routeName]) {
				this.createInstanceComponent('#default');
				return;
			}

			if (Routes[routeName].private) {

				if (this.isLogged()) {
					this.createInstanceComponent(routeName);
					return;
				}
				
				this.createInstanceComponent('#default');
				return;
			}

			this.createInstanceComponent(routeName);
		} else {
			this.createInstanceComponent('#default');
		}
	}

	createInstanceComponent(routeName) {
		const { component } = Routes[routeName];
		const ComponentInstance = new component();
		this.render(ComponentInstance.render());
		ComponentInstance.bind();
	}
}
