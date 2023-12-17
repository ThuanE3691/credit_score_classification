import clsx from "clsx";
import { useState } from "react";
import logoIcon from "../../assets/logo_icon.png";
import logoName from "../../assets/logo_name.png";

const Navbar = () => {
	const [active, setActive] = useState(0);

	const items = [
		{
			name: "Home",
			link: "/",
			color: "text-[#3761B6]",
		},
		{
			name: "How",
			link: "/how",
			color: "text-[#FFE7A9]",
		},
		{
			name: "Check",
			link: "/check",
			color: "text-[#DD4976]",
		},
		{
			name: "About",
			link: "/about",
			color: "text-[#3761B6]",
		},
	];

	const style_nav_item = "font-primary cursor-pointer";

	return (
		<nav className="flex items-center">
			<div className="flex items-center gap-x-4">
				<img src={logoIcon} className="w-8" alt="" />
				<img src={logoName} className="w-[74px]" alt="" />
			</div>
			<ul className="flex items-center px-2 ml-auto gap-x-14">
				{items.map((item, index) => {
					const styles = clsx(
						style_nav_item,
						active === index && `font-extrabold ${item.color}`
					);
					return (
						<li
							key={item.name}
							className={styles}
							onClick={() => setActive(index)}
						>
							{item.name}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navbar;
