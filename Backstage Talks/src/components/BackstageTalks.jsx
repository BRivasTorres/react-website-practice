import CoverBackstage from "./CoverBackstage"
import InfoBackstage from "./InfoBackstage"
import Nav from "./Nav"

const BackstageTalks = () => {
  return (
    <div className="bg-red-600 p-[2rem] grid grid-cols-[_1fr_5fr_1fr] ">
      <InfoBackstage />
      <CoverBackstage />
      <Nav />
    </div>
  )
}

export default BackstageTalks
