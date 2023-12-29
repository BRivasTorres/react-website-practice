import { NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Footer = () => {
    const [input, setInput] = useState();
  return (
		<footer className="border border-gray-900 w-[80%] mx-auto ">
			<h2 className="text-[3.5rem] font-semibold ">Ableton</h2>
			<div className="grid grid-cols-[_25%_30%_45%] gap-[1rem] ">
				<section className="flex flex-col text-[1.2rem] mt-[4rem]">
					<NavLink to={"/live"} className="w-[fit-content]">
						Register Live or Push
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
					<NavLink to={"/about"} className="w-[fit-content]">
						About Ableton
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
					<NavLink to={"/Jobs"} className="w-[fit-content]">
						Jobs{" "}
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
					<div className="flex gap-[.7rem] text-[1.5rem] mt-[.4rem] ">
						<NavLink
							to={"#"}
							className="bg-[#3477F2] flex items-center outline-transparent "
						>
							<FontAwesomeIcon
								icon={faFacebookF}
								className="bg-white text-[#3477F2] m-[5px] px-[8px] py-[3px] rounded-[100%]"
							/>
						</NavLink>
						<NavLink
							to={"#"}
							className="bg-[#1DA1F2] flex items-center outline-transparent"
						>
							<FontAwesomeIcon
								icon={faTwitter}
								className="text-white p-[8px]"
							/>
						</NavLink>
						<NavLink
							to={"#"}
							className="bg-[#FF001D] flex items-center outline-transparent"
						>
							<FontAwesomeIcon
								icon={faYoutube}
								className="text-white p-[8px] "
							/>
						</NavLink>
						<NavLink
							to={"#"}
							className="bg-[#F77737] flex items-center outline-transparent"
						>
							<FontAwesomeIcon
								icon={faInstagram}
								className="text-white bg-[#F77737] p-[8px] "
							/>
						</NavLink>
					</div>
				</section>

				<section className="mt-[4rem] flex flex-col capitalize">
					<h4 className="font-semibold text-[1.3rem]">Education</h4>
					<NavLink to="#">
						Offers for students and teachers{" "}
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
					<NavLink to="#">
						Ableton for the Classroom{" "}
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
					<NavLink to="#">
						Ableton for colleges and universities
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
				</section>

				<section className="mt-[4rem]">
					<h4 className="font-semibold text-[1.3rem]">
						Sign up to our newsletter
					</h4>
					<p className="w-[90%]">
						Enter your email address to stay up to date with the
						latest offers, tutorials, downloads, surveys and more.
					</p>
					<form action="" className="grid grid-cols-[_70%_20%] mt-[1.4rem] font-semibold ">
						<input
							type="text"
							placeholder="Email Adrress"
							value={input}
							className="bg-[#EEEEEE] text-[#7C6666] p-[10px]"
						/>
						<button type="submit" className="bg-[#0000FF] text-white ">
							Sign Up
						</button>
					</form>
				</section>
			</div>
		</footer>
  );
}

export default Footer
