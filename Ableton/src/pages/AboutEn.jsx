import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

const AboutEn = () => {
	return (
		<div className="w-[80%] max-w-[1400px] min-w-[300px] mx-auto border border-red-600 mt-[1rem] ">
			<img
				src="/imgs/img1.png"
				alt="img1"
				className="w-[100%] mx-auto "
			/>
			<article className="w-[60%] mx-auto mt-[6rem]">
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

			<div className="grid grid-cols-[50%_10%_40%] mt-[16rem]">
				<div className="bg-[#FBFFA7] w-[60%] h-[95dvh] absolute mt-[-8rem] l-about "></div>
				<img
					src="/imgs/img2.png"
					alt="img2"
					className="h-[70dvh] w-[80vw] z-[0] "
				/>
				<img
					src="/imgs/img3.png"
					alt="img3"
					className="col-start-3 self-center z-[0]"
				/>
			</div>

			<article className="w-[60%] mx-auto my-[16rem]">
				<h3 className="font-semibold text-[1.5rem] my-[1.5rem] ">
					Making music isn’t easy. It takes time, effort, and
					learning. But when you’re in the flow, it’s incredibly
					rewarding.
				</h3>
				<p className="text-black text-[1.2rem] mb-[7rem]">
					We feel the same way about making Ableton products. The
					driving force behind Ableton is our passion for what we
					make, and the people we make it for.
				</p>
				<div className="">
					<iframe
						width="100%"
						height="400"
						src="https://www.youtube.com/embed/9SbnhgjeyXA?si=N0AHUcYO1FIpQysd"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
					</iframe>
				</div>
			</article>
		</div>
	);
};

export default AboutEn;
