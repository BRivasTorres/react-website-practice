import { NavLink } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Countries from "./Selects";
import Selects from "./Selects";

const Footer = () => {
	const [input, setInput] = useState()
  return (
		<footer className="w-[80%] mx-auto">
			<h2 className="text-[3.5rem] font-semibold mt-[6rem]">Ableton</h2>
			<div className="grid grid-cols-[_1fr_1fr_2fr] grid-rows-[_50%_50%_50%] gap-[2rem] content-between mt-[4rem] wrap ">
				<section className="flex flex-col text-[1.2rem]">
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

				<section className="flex flex-col capitalize">
					<h4 className="footer__h4">Education</h4>
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

				<section >
					<h4 className="footer__h4">Sign up to our newsletter</h4>
					<p className="w-[90%]">
						Enter your email address to stay up to date with the
						latest offers, tutorials, downloads, surveys and more.
					</p>
					<form
						action=""
						className="grid grid-cols-[_70%_30%] mt-[1.4rem] font-semibold "
					>
						<input
							type="text"
							placeholder="Email Adrress"
							value={input}
							className="bg-[#EEEEEE] text-[#7C6666] p-[10px]"
						/>
						<button
							type="submit"
							className="bg-[#0000FF] text-white "
						>
							Sign Up
						</button>
					</form>
				</section>

				<section className="flex flex-col text-[1.2rem] capitalize">
					<h4 className="footer__h4">Community</h4>
					<NavLink to={"#"}>
						find ableton user groups{" "}
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
					<NavLink to={"#"}>
						find certified training{" "}
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
					<NavLink to={"#"}>
						become a certified training{" "}
						<FontAwesomeIcon
							icon={faChevronRight}
							className="text-[.8rem] ml-1"
						/>
					</NavLink>
				</section>

				<section className="">
					<Selects />
				</section>
			</div>
			<div className="my-[4rem] text-[14px] font-semibold ">
				<ul className="flex gap-x-[1rem] items-center">
					<NavLink to={"#"}>Contact Us</NavLink>
					<NavLink to={"#"}>Press Resources</NavLink>
					<NavLink to={"#"}>Legal Info</NavLink>
					<NavLink to={"#"}>Privacy Policy</NavLink>
					<NavLink to={"#"}>Cookie Settings</NavLink>
					<NavLink to={"#"}>Imprint</NavLink>

					<NavLink to={"#"} className="ml-auto ">
						Made in Berlin
						<img
							src="/imgs/logo.png"
							className="w-[50px] inline-block"
						/>
					</NavLink>
				</ul>

				<h3 className="mt-[4rem] text-center ">
					This site was created to practice, THIS IS NOT THE OFFICIAL
					SITE
				</h3>
			</div>
		</footer>
  );
}

export default Footer
