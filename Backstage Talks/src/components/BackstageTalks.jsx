import { useState } from "react"
import CoverBackstage from "./CoverBackstage"
import InfoBackstage from "./InfoBackstage"
import Nav from "./Nav"
import booksCoverData from "../mocks/BooksCoverData"


//TODO : Verificar implementacion en la actializacion del background color
const BackstageTalks = () => {
  const [currColor, setCurrColor] = useState(1)
  
  const handleBackgroundColor = (id) => {
    setCurrColor(id)
  }
  
  return (
		<div
			className={`p-[2rem] flex justify-center gap-[2rem] bg-[${booksCoverData[currColor].colorBg}]`}
		>
			<InfoBackstage />
			<CoverBackstage />
			<Nav handleBackgroundColor={handleBackgroundColor} />
		</div>
  );
}

export default BackstageTalks
