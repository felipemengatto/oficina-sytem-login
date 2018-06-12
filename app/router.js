import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';

export default {
	'#home': {
		component: Home,
		private: false,
	},
	'#login': {
		component: Login,
		private: false,
	},
	'#dashboard': {
		component: Dashboard,
		private: true
	},
	'#default': {
		component: Home,
		private: false,
	}
}