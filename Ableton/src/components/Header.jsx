import { NavLink } from "react-router-dom";
import logo from "/imgs/logo.png";

const Header = () => {
	return (
		<header>
			<nav className="text-[1.5rem] font-700 p-[1rem] ">
				<ul className="flex px-[2rem] gap-[2rem] items-center ">
					<NavLink>
						<img src={logo} alt="logo" title="logo" className="" />
					</NavLink>
					<NavLink to={"/live"}>Live</NavLink>
					<NavLink to={"/push"}>Push</NavLink>
					<NavLink to={"/note"}>Note</NavLink>
					<NavLink to={"/link"}>Link</NavLink>
					<NavLink to={"/help"}>Help</NavLink>
					<NavLink to={"/more"} className="text-[#FF8B4D] ">
						More +
					</NavLink>
					<NavLink
						to={"/trylive"}
						className="ml-[auto] text-[#0000FF] "
					>
						Try live for free
					</NavLink>
					<NavLink to={"/login"}>Log in or register</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
