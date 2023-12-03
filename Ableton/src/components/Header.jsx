import { NavLink } from "react-router-dom";
import logo from "/imgs/logo.png";

const Header = () => {
	return (
		<header>
			<nav className="text-[1.5rem] font-700 p-[1rem] ">
				<ul className="flex px-[2rem] gap-[2rem] items-center">
					<NavLink to={"/en"} title="en">
						<img src={logo} alt="logo" title="logo" />
					</NavLink>
					<NavLink to={"/live"} title="live">
						Live
					</NavLink>
					<NavLink to={"/push"} title="push">
						Push
					</NavLink>
					<NavLink to={"/note"} title="note">
						Note
					</NavLink>
					<NavLink to={"/link"} title="link">
						Link
					</NavLink>
					<NavLink to={"/help"} title="help">
						Help
					</NavLink>
					<NavLink
						to={"/more"}
						title="more"
						className="text-activeLink "
					>
						More +
					</NavLink>
					<NavLink
						to={"/trylive"}
						className="ml-[auto] text-[#0000FF]"
						title="trylive"
					>
						Try live for free
					</NavLink>
					<NavLink to={"/login"} title="login">
						Log in or register
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
