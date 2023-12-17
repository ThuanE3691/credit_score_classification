import clsx from "clsx";
import Logo from "../../assets/Logo.jsx";
import config from "../../config";
import { Link } from "react-router-dom";

const Navbar = ({ isLight }) => {
	const items = [
		{
			name: "Home",
			link: config.routes.home,
			color: " text-blue",
		},
		{
			name: "How",
			link: config.routes.how,
			color: "text-yellow",
		},
		{
			name: "Check",
			link: config.routes.check,
			color: "text-red",
		},
		{
			name: "About Us",
			link: config.routes.about,
			color: "text-blue",
		},
	];

	return (
		<nav className="relative flex items-center z-[1000]">
			<Link to="/">
				<Logo
					className={clsx(
						"fill-current w-28",
						isLight ? "text-white" : "text-black"
					)}
				/>
			</Link>
			<ul className="flex items-center px-2 ml-auto gap-x-14">
				{items.map((item) => {
					const styles = clsx(
						"font-primary cursor-pointer transition-all",
						!(item.link === window.location.pathname) &&
							isLight &&
							"text-white",
						item.link === window.location.pathname &&
							` [text-shadow:1px_0px_0px] ${item.color}`
					);
					return (
						<Link key={item.name} to={item.link}>
							<li className={styles}>{item.name}</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
