const SubPagesLists = ({dataList}) => {
  return (
		<div>
			<section className="mt-[8rem] mx-auto w-[85%] max-w-[1900px] grid grid-cols-2 help-info">
				{dataList.map((item) => {
					return (
						<div key={item.id} className="">
							<h2 className="text-[2.5rem] font-medium mb-[2rem] ">
								{item.title}
							</h2>
							{item.list.map((li, liId) => {
								return (
									<ul
										key={liId}
										className="px-[2.5rem] text-[1.3rem] font-normal"
									>
										<li className="list-disc mb-[.3rem] hover:underline hover:cursor-pointer ">
											{li}
										</li>
									</ul>
								);
							})}
						</div>
					);
				})}
			</section>
		</div>
  );
}

export default SubPagesLists
