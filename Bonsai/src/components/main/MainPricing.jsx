const MainPricing = () => {
  return (
		<div className="w-[60%] mx-auto py-[4rem] flex justify-between items-center lg:text-[.8rem]">
			<h2 className="text-[3.5rem] ">Plans & Pricing</h2>
			<aside className="flex items-center gap-x-[1.5rem]">
				<h4 className="uppercase text-[1.5rem] ">monthly</h4>
				<button className="w-[60px] h-[30px] bg-[#01B289] rounded-[100px]">
					<div className="w-[25px] h-[25px] bg-white rounded-[100%] m-[3px] "></div>
				</button>
			</aside>
			<aside className="relative">
				<img src="/imgs/time.svg" alt="" />
				<span className="uppercase absolute bottom-[-10px] right-[20px] text-[1.2rem] text-[#868997] ">
					yearly
				</span>
			</aside>
		</div>
  );
}

export default MainPricing
