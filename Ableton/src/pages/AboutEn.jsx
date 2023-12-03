import { NavLink } from "react-router-dom";

const AboutEn = () => {
	return (
		<div>
			<img
				src="/imgs/img1.png"
				alt="img1"
				className="w-[80%] mx-auto mt-[2.5rem]"
			/>
			<article className="w-[50%] mx-auto mt-[6rem]">
				<p className="text-[2rem] font-semibold">
					We make
					<NavLink className="text-[#0000FF]">Live</NavLink>,{" "}
					<NavLink className="text-[#0000FF]">Push</NavLink> and
					<NavLink className="text-[#0000FF]"> Link</NavLink> — unique
					software and hardware for music creation and performance.
					With these products, our community of users creates amazing
					things.
				</p>
				<p className="text-[1.1rem] mt-[2rem] ">
					Ableton was founded in 1999 and released the first version
					of Live in 2001. Our products are used by a community of
					dedicated musicians, sound designers, and artists from
					across the world.
				</p>
			</article>
			<div className="bg-[#FBFFA7] w-[60%] h-[100dvh]"></div>
		</div>
	);
};

export default AboutEn;
