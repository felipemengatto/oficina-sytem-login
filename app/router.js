import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';

export default {
	'#home': {
		template: new Home().render(),
		private: false,
	},
	'#login': {
		template: new Login().render(),
		private: false,
	},
	'#dashboard': {
		template: new Dashboard().render(),
		private: true
	},
	'#default': {
		template: new Home().render(),
		private: false,
	}
}