import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import mainContentData from "../../mocks/MainContentData";

const SubPagesHeader = ({pageId}) => {
  return (
		<div className="bg-[#DADBF1] px-[7rem] py-[5rem]">
			<small className="font-semibold text-[1rem] flex items-center gap-[.5rem] mb-[1rem] ">
				<NavLink to={"/"}>Abstract</NavLink>
				<FontAwesomeIcon icon={faAngleRight} />
				{mainContentData[pageId].title}
			</small>
			<h2 className="text-[4rem] font-semibold">{mainContentData[pageId].title}</h2>
			<p className="text-[2rem] font-normal">{mainContentData[pageId].description}</p>
		</div>
  );
}

export default SubPagesHeader
