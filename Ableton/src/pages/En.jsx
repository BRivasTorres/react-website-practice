import { NavLink, Outlet } from "react-router-dom";

const En = () => {
	return (
		<div className="w-[90%] max-w-[1600px] mx-auto bg-white flex flex-col">
			<ul className="flex gap-[2rem] text-[1.3rem] px-[2.5rem] py-[2rem]">
				<NavLink
					to={"about"}
					title="about"
					className={({ isActive }) =>
						isActive ? "text-activeLink" : null
					}
				>
					About
				</NavLink>
				<NavLink
					to={"jobs"}
					title="jobs"
					className={({ isActive }) =>
						isActive ? "text-activeLink" : null
					}
				>
					Jobs
				</NavLink>
				<NavLink
					to={"apprenticeships"}
					title="apprenticeships"
					className={({ isActive }) =>
						isActive ? "text-activeLink" : null
					}
				>
					Apprenticeships
				</NavLink>
			</ul>
			<Outlet />
		</div>
	);
};

export default En;
