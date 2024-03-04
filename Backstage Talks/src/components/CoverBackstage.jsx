import booksCoverData from "../mocks/BooksCoverData"

const CoverBackstage = () => {
    
  return (
		<div className="w-[60%]">
			{booksCoverData.map((book) => {
                return (
					<div
						key={book.id}
						className="flex flex-col justify-center items-center font-semibold min-h-[100vh] "
						id={`issue${book.id}`}
					>
						<img
							src={book.imgSrc}
							alt="cover"
							className="w-[40%]"
						/>
						<h2 className="capitalize text-[1.3rem] mb-[1.5rem] ">
							{book.issue}
						</h2>
						{book.buy &&
							book.buy.map((subItem, idx) => {
								return (
									<aside key={idx}>
										<a
											href="#"
											className={`${
												book.id === 2
													? "text-black"
													: "text-white"
											} mr-[.4rem] uppercase hover:underline`}
										>
											buy here
										</a>
										<span className="">{subItem}</span>
									</aside>
								);
							})}
						<p className="text-[.9rem] mt-[1.5rem]">
							{book.whereToBuy}{" "}
							<a
								href="#"
								className={`${book.id === 2 ? "text-black" : "text-white"} hover:underline`}
							>
								selected stores
							</a>
						</p>
					</div>
				);
            })}
		</div>
  );
}

export default CoverBackstage
