// Route
import config from "../config";

// Page
import Home from "../Views/Home";
import How from "../Views/How";
import Check from "../Views/Check";
import About from "../Views/About";

const routes = [
	{ path: config.routes.home, component: Home, isLight: false },
	{ path: config.routes.how, component: How, isLight: true },
	{
		path: config.routes.check,
		component: Check,
		isLight: false,
	},
	{
		path: config.routes.about,
		component: About,
		isLight: true,
	},
];

export default routes;
