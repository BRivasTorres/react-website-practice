import { NavLink } from "react-router-dom";

const AboutEn = () => {
	return (
		<section className="w-[80%] max-w-[1400px] min-w-[300px] mx-auto border border-red-600 mt-[1rem]">
			<img
				src="/imgs/img1.png"
				alt="img1"
				className="w-[100%] mx-auto "
			/>
			<article className="article-about">
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

			<aside className="relative">
				<div className="bg-[#FBFFA7] mt-[8rem] w-[80%] h-[100dvh] relative right-[-32.6%]"></div>
				<div className="grid grid-cols-[50%_10%_40%] absolute top-[50%] translate-y-[-50%]">
					<img src="/imgs/img2.png" alt="img2" className="z-[0] " />
					<img
						src="/imgs/img3.png"
						alt="img3"
						className="z-[0] col-start-3 self-center"
					/>
				</div>
			</aside>

			<article className="article-about">
				<h3 className="font-semibold text-[1.8rem] my-[1.5rem] ">
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
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
					<span className="mx-[1rem] ">
						Why Ableton - Juanpe Bolivar
					</span>
				</div>

				<div className="my-[8rem]">
					<h3 className="font-semibold text-[1.8rem]  ">
						We are more than 350 people from 30 different countries
						divided between our headquarters in Berlin and our
						offices in Los Angeles and Tokyo.
					</h3>
					<p className="mt-[1rem] ">
						Most of us are active musicians, producers, and DJs, and
						many of us use Live and Push every day. We come from a
						wide range of cultural and professional backgrounds.
						Some of us have PhDs, some are self-taught, and most of
						us are somewhere in between. What connects us is the
						shared belief that each of us has the skills and
						knowledge to contribute to something big: helping to
						shape the future of music culture.
					</p>
				</div>
			</article>

			<aside className="relative">
				<div className="bg-[#b6ffc0] w-[75%] h-[120dvh] relative left-[-12.6%] "></div>
				<div className="grid grid-cols-[45%_10%_45%] absolute top-[50%] translate-y-[-50%] w-[100%] ">
					<div className=" flex flex-col justify-between">
						<img
							src="/imgs/img4.png"
							alt="img3"
							className="z-[1] h-[45%] "
						/>
						<img
							src="/imgs/img5.png"
							alt="img4"
							className="z-[1] h-[45%]  "
						/>
					</div>
					<div className="col-start-3 self-center">
						<img
							src="/imgs/img6.png"
							alt="img4"
							className="z-[1]"
						/>
					</div>
				</div>
			</aside>

			<article className="article-about ">
				<h2 className="text-[2rem] font-semibold ">
					We believe it takes focus to create truly outstanding
					instruments. We only work on a few products and we strive to
					make them great.
				</h2>
				<p className="mt-[1rem] ">
					Most of us are active musicians, producers, and DJs, and
					many of us use Live and Push every day. We come from a wide
					range of cultural and professional backgrounds. Some of us
					have PhDs, some are self-taught, and most of us are
					somewhere in between. What connects us is the shared belief
					that each of us has the skills and knowledge to contribute
					to something big: helping to shape the future of music
					culture.
				</p>
			</article>

			<aside className="mt-[8rem] ">
				<img src="/imgs/img7.png" alt="" />
			</aside>

			<article className="article-about">
				<h2 className="text-[2rem] font-semibold ">
					We’re passionate about what we do, but we’re equally
					passionate about improving who we are
				</h2>
				<p className="mt-[2rem] ">
					We work hard to foster an environment where people can grow
					both personally and professionally, and we strive to create
					a wealth of opportunities to learn from and with each other.
				</p>
				<p className="mt-[1rem] ">
					Alongside an internal training program, employees are
					actively supported in acquiring new knowledge and skills,
					and coached on applying these in their daily work. In
					addition, staff-organized development and music salons are a
					chance to discuss new technologies, production techniques
					and best practices.
				</p>
			</article>

			<aside className="relative mt-[8rem]">
				<div className="bg-[#d5b3ff] h-[100dvh] w-[80%] mx-auto "></div>
				<div className="absolute top-[50%] translate-y-[-50%] grid grid-cols-[45%_55%] items-center border border-green-950">
					<img src="/imgs/img8.png" alt=""/>
					<img
						src="/imgs/img9.png"
						alt=""
						className="ml-[38%] "
					/>
				</div>
			</aside>
		</section>
	);
};

export default AboutEn;
