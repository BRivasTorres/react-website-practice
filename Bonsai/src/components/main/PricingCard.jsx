import dataPricing from "../../mocks/dataPricing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from "@fortawesome/free-solid-svg-icons"

const PricingCard = () => {
  return (
		<div className="w-[85%] mx-auto flex gap-[2rem]">
			{dataPricing.map((card) => {
				return (
					<section
						key={card.id}
						className="border border-[#D3D4E1] px-[3rem] py-[4rem] text-[#4C525A] bg-[#FBFCFF] rounded-[10px] relative "
					>
						<h3 className="text-[1.4rem] capitalize font-semibold ">
							{card.type}{" "}
						</h3>
						<p className="text-[#636A6F] text-[.9rem]">
							{card.description}{" "}
						</p>
						<div className="flex relative">
							<span className="text-[1.6rem] relative top-[10px] ">
								$
							</span>
							<span className="text-[3rem] font-semibold  ">
								{card.price}{" "}
							</span>
							<span className="uppercase text-[1.4rem] absolute bottom-0 left-[30%] ">
								/month
							</span>
						</div>
						<div className="bg-[#01B289] h-[2px] "></div>
						<section className="mt-[2.5rem]">
							{card.benefits.map((benefit, id) => {
								return (
									<ul
										key={id}
										className="flex items-center gap-x-4 py-[1rem] "
									>
										<FontAwesomeIcon
											icon={faCheck}
											className="text-[#01B289] "
										/>
										<li>{benefit}</li>
									</ul>
								);
							})}
						</section>
						<button className="bottom-0 uppercase bg-[#00B289] py-[1.5rem] text-white font-semibold my-[2rem] w-[75%] rounded-[5px] absolute bottom-0 ">
							start free
						</button>
					</section>
				);
			})}
		</div>
  );
}

export default PricingCard
