import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
		<nav className="w-[85%] max-w-[2400px] mx-auto flex justify-between text-[1.5rem] py-[1.5rem] ">
			<ul className="flex items-center ">
				<NavLink
					to={"/"}
					className="hover:opacity-50 transition-all duration-300 ease-in "
				>
					Abstract
				</NavLink>
				<div className="h-[30px] w-[3px] mx-[1rem] bg-mainColorText "></div>
				<NavLink
					to={"/"}
					className="hover:underline"
				>
					Help Center
				</NavLink>
			</ul>
			<ul className="flex gap-[1.5rem] items-center">
				<NavLink
					to={"/sign"}
					className="border px-[2rem] py-[.5rem] rounded-lg transition-all duration-300 ease-in "
				>
					Submit a request
				</NavLink>
				<NavLink
					to={"/submit"}
					className="bg-roseColor px-[2rem] py-[.5rem] rounded-lg hover:bg-white hover:text-roseColor transition-all duration-300 ease-in"
				>
					Sign in
				</NavLink>
			</ul>
		</nav>
  );
}

export default Nav
