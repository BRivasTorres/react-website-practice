import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const En = () => {
	return (
		<div className="w-[90%] max-w-[1600px] mx-auto bg-white flex flex-col">
			{/* <ul className="flex gap-[2rem] text-[1.3rem] px-[2.5rem] py-[2rem]">
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
			</ul> */}
			<article className="relative hover:cursor-pointer">
				<div className="absolute w-[60%] font-semibold ">
					<h2 className="px-[3.5rem] py-[2rem] text-[3.2rem] ">
						Save 20% on Live 11 and upgrade to Live 12 for free
					</h2>
					<span className="font-semibold text-[1.3rem] px-[3.5rem] underline">
						Shop Now
						<FontAwesomeIcon icon={faChevronRight} />
					</span>
				</div>
				<img
					src="/imgs/enImgs/img1.webp"
					alt="imgEn"
					className="w-[60%]"
				/>
			</article>
			<Outlet />
		</div>
	);
};

export default En;
