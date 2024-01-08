import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const En = () => {
	return (
		<div className="w-[90%] max-w-[1600px] mx-auto bg-white flex flex-col">
			<section className="grid grid-cols-[_57%_8%_35%]">
				<article className="relative">
					<div className="absolute  font-semibold hover:cursor-pointer">
						<h2 className="px-[3.5rem] py-[2rem] text-[3rem] ">
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
						className="w-[100%] hover:cursor-pointer"
					/>
				</article>

				<article className="col-start-3 self-end">
					<div className="absolute font-semibold hover:cursor-pointer text-[#00FFFF] text-balance">
						<h2 className="m-[1rem] capitalize text-[2.5rem] font-semibold text-balance w-[80%] ">
							the push 3 upgrade kit is here
						</h2>
						<span className="font-semibold text-[1.3rem] px-[1rem] underline">
							Turn Push into a standalone instrument
							<FontAwesomeIcon icon={faChevronRight} />
						</span>
					</div>
					<img
						src="/imgs/enImgs/img2.webp"
						alt="img2"
						className="w-[100%] hover:cursor-pointer "
					/>
				</article>

				<article className="relative left-[70%] top-[-20%] w-[60%] ">
					<div className="absolute font-semibold hover:cursor-pointer text-[#00FFAF]">
						<h2 className="m-[1rem] capitalize text-[2.5rem] font-semibold text-balance w-[80%] ">
							See what's new in Note
						</h2>
						<span className="font-semibold text-[1.3rem] px-[1rem] underline">
							Cehck out the latest features
							<FontAwesomeIcon icon={faChevronRight} />
						</span>
					</div>
					<img
						src="/imgs/enImgs/img3.webp"
						alt="img2"
						className="w-[100%] hover:cursor-pointer"
					/>
				</article>
			</section>


			<section className="mt-[4rem] w-[85%] mx-auto">
				<div className="flex items-center justify-between ">
					<h2 className="font-bold text-[2.4rem] ">The latest from Ableton</h2>
					<ul className="text-blueLink font-semibold text-[1.2rem] flex gap-[1rem] ">
						<NavLink to={"#"}>All Posts</NavLink>
						<NavLink to={"#"}>Artist</NavLink>
						<NavLink to={"#"}>News </NavLink>
						<NavLink to={"#"}>Downloads</NavLink>
						<NavLink to={"#"}>Tutorials</NavLink>
						<NavLink to={"#"}>Videos</NavLink>
						<NavLink to={"#"}>Loop</NavLink>
					</ul>
				</div>
			</section>
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
			<Outlet />
		</div>
	);
};

export default En;
