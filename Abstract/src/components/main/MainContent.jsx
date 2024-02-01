import { Link } from "react-router-dom"
import mainContentData from "../../mocks/MainContentData"

const MainContent = () => {
  return (
    <div className="main-content grid grid-cols-main-grid gap-y-[6rem] items-center gap-x-[2rem] mt-[7rem]">
      {mainContentData.map(item => {
        return (
			<div key={item.id} className="flex gap-[1.5rem]">
				<img src={item.img} alt={item.name} className="max-w-[100px]" />
				<aside className="flex flex-col">
					<h2 className="text-[1.6rem] font-bold leading-6 mb-[1rem] ">
						{item.title}
					</h2>
					<p className="text-[1.2rem] font-normal leading-6 mb-[1rem] ">
						{item.description}{" "}
					</p>
					<Link
						className="text-[1.5rem] text-[#4C5FD5] flex items-center  hover:underline "
						to={`/content/${item.name}`}
					>
						Learn More →
					</Link>
				</aside>
			</div>
		);  
      })}
    </div>
  )
}

export default MainContent
