import booksCoverData from "../mocks/BooksCoverData"

const CoverBackstage = () => {
  return (
		<div className="self-center">
			{/* {booksCoverData.map((book, id) => {
            return(
                <div key={id}>
                    <img src={book.imgSrc} alt="" />
                    <h2>{book.issue}</h2>
                    {book.buy && 
                        book.buy.map((subItem, idx) => {
                        return(
                            <aside key={idx}>
                                <a href="#">Where to buy {subItem}</a>
                            </aside>
                        )})
                    }
                    <p>{book.whereToBuy} <a href="#">selected stores</a></p>
                </div>
            )
        })} */}
			{
				<div className="flex flex-col justify-center items-center font-semibold">
					<img
						src={booksCoverData[0].imgSrc}
						alt="cover"
						className="w-[40%]"
					/>
					<h2 className="capitalize text-[1.3rem] mb-[1.5rem] ">
						{booksCoverData[0].issue}
					</h2>
					{booksCoverData[0].buy &&
						booksCoverData[0].buy.map((subItem, idx) => {
							return (
								<aside key={idx}>
									<a
										href="#"
										className="text-white  mr-[.4rem] uppercase hover:underline "
									>
										buy here
									</a>
									<span className="">{subItem}</span>
								</aside>
							);
						})}
					<p className="text-[.9rem] mt-[1.5rem]">
						{booksCoverData[0].whereToBuy}{" "}
						<a href="#" className="text-white hover:underline">selected stores</a>
					</p>
				</div>
			}
		</div>
  );
}

export default CoverBackstage
