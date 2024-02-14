import footerData from "../../mocks/FooterData";

const Footer = () => {
  return (
		<div className="bg-[#000000] mt-[4rem] px-[8rem] py-[4rem] text-white grid grid-cols-[_1fr_auto] grid-rows-[_1fr_auto] gap-x-[8rem] ">
			<section className="grid grid-cols-4 gap-x-[1rem] w-[100%]">
				{footerData.map((itemList) => {
					return (
						<div key={itemList.id} className={`${itemList.id === 5 ? "col-start-4" : "" } capitalize `}>
							<h2 className="font-bold text-[1.8rem] mb-4 ">{itemList.title}</h2>
							<ul className="text-[1.2rem] ">
								{itemList.list.map((li, id) => {
									return (
										<a href="#" key={id} className="hover:underline">
											<li>{li}</li>
										</a>
									);
								})}
							</ul>
						</div>
					);
				})}
			</section>
			<aside className="row-start-2 col-start-2 font-semibold text-[1.5rem] capitalize ">
				<h3>©copyrigth 2023</h3>
				<h3>Practice page</h3>
				<h3>All rights reserved</h3>
			</aside>
		</div>
  );
}

export default Footer
