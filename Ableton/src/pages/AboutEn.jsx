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
					<NavLink className="text-[#0000FF]"> Live</NavLink>,{" "}
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

			<div className="bg-[#FBFFA7] w-[50%] h-[85dvh] z-[1] absolute  "></div>
			<div className="mt-[6rem] grid grid-cols-[50%_10%_40%]">
				<img
					src="/imgs/img2.png"
					alt="img2"
					className="h-[70dvh] z-[2]"
				/>
				<img
					src="/imgs/img3.png"
					alt="img3"
					className="col-start-3 self-center z-[2]"
				/>
			</div>
		</div>
	);
};

export default AboutEn;
