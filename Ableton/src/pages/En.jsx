import { NavLink, Outlet } from "react-router-dom";

const En = () => {
	return (
		<div>
			<NavLink to={"about"} title="about">
				About
			</NavLink>
			<NavLink to={"jobs"} title="jobs">
				Jobs
			</NavLink>
			<NavLink to={"apprenticeships"} title="apprenticeships">
				Apprenticeships
			</NavLink>
			<Outlet />
		</div>
	);
};

export default En;
