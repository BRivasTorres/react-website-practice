import { NavLink } from "react-router-dom";

const AboutEn = () => {
	return (
		<div className="w-[80%] max-w-[1400px] min-w-[300px] mx-auto border border-red-600 mt-[1rem]">
			<img
				src="/imgs/img1.png"
				alt="img1"
				className="w-[100%] mx-auto "
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
				<p className="text-[1.1rem] mt-[2rem]">
					Ableton was founded in 1999 and released the first version
					of Live in 2001. Our products are used by a community of
					dedicated musicians, sound designers, and artists from
					across the world.
				</p>
			</article>
			<div className="mt-[6rem] ">
				<img
					src="/imgs/img2.png"
					alt="img2"
					className="w-[50%] h-[80dvh] "
				/>
				<div className="bg-[#FBFFA7] w-[60%] h-[100dvh] ml-auto ">
					<img src="/imgs/img3.png" alt="img3" className="w-[80%] " />
				</div>
			</div>
		</div>
	);
};

export default AboutEn;
