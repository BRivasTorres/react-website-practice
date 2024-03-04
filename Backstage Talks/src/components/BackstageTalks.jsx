import { useState } from "react"
import CoverBackstage from "./CoverBackstage"
import InfoBackstage from "./InfoBackstage"
import Nav from "./Nav"
import booksCoverData from "../mocks/BooksCoverData"

const BackstageTalks = () => {
  const [currColor, setCurrColor] = useState(0)
  
  const handleBackgroundColor = (id) => {
    setCurrColor(id)
  }
  
  return (
		<div
			style={{
				padding: "2rem",
				display: "flex",
				justifyContent: "center",
				gap: "2rem",
				backgroundColor: booksCoverData[currColor].colorBg,
			}}
		>
			<InfoBackstage />
			<CoverBackstage />
			<Nav handleBackgroundColor={handleBackgroundColor} />
		</div>
  );
}

export default BackstageTalks