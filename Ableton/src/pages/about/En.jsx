import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import enData from "../../mocks/enData";
import Footer from "../../components/Footer";

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

			<section className="w-[85%] mx-auto">
				{enData.map((item) => {
					return (
						<div key={item.id} className="mt-[6rem]">
							<section className="flex items-baseline justify-between ">
								<h2 className=" font-bold text-[2.4rem] capitalize">
									{item.title}
								</h2>
								{item.links ? (
									<ul className="text-blueLink font-semibold text-[1.2rem] flex gap-[1rem] capitalize">
										{item.links.map((link, id) => {
											return (
												<NavLink key={id}>
													{link}
												</NavLink>
											);
										})}
									</ul>
								) : null}
							</section>
							<section className="grid grid-cols-[_1fr_1fr_1fr] gap-[4rem] mt-[2rem]">
								{item.boxes.map((box, id) => {
									return (
										<div
											key={id}
											className="hover:cursor-pointer"
										>
											<img
												src={box.img}
												alt=""
												className="w-[100%] "
											/>
											<h4 className="font-semibold text-[1.4rem] mt-[1rem] ">
												{box.description}
											</h4>
										</div>
									);
								})}
							</section>
						</div>
					);
				})}
			</section>

			<section className="w-[100%] h-[200px]  mx-auto bg-[#EEEEEE] mt-[4rem] flex justify-center items-center text-[1.3rem] capitalize font-semibold ">
				<h4 className="mr-[30px] ">More:</h4>
				<ul className="flex gap-[1.2rem] text-blueLink ">
					<NavLink to={"#"}>all posts</NavLink>
					<NavLink to={"#"}>atists</NavLink>
					<NavLink to={"#"}>news</NavLink>
					<NavLink to={"#"}>downloads</NavLink>
					<NavLink to={"#"}>tutorials</NavLink>
					<NavLink to={"#"}>videos</NavLink>
					<NavLink to={"#"}>loop</NavLink>
					<NavLink to={"#"}>one thing</NavLink>
				</ul>
			</section>
			<Footer />
			<Outlet />
		</div>
	);
};

export default En;
