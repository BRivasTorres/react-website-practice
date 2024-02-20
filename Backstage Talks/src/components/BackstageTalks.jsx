import CoverBackstage from "./CoverBackstage"
import InfoBackstage from "./InfoBackstage"
import Nav from "./Nav"

const BackstageTalks = () => {
  return (
    <div className="p-[2rem] grid grid-cols-[_2fr_5fr_2fr] w-[100%] min-h-[100vh] bg-red-300 ">
      <InfoBackstage />
      <CoverBackstage />
      <Nav />
    </div>
  )
}

export default BackstageTalks
