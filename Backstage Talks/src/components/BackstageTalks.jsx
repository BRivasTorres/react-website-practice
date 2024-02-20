import CoverBackstage from "./CoverBackstage"
import InfoBackstage from "./InfoBackstage"
import Nav from "./Nav"

const BackstageTalks = () => {
  
  return (
    <div className="p-[2rem] flex justify-center gap-[2rem] bg-red-300">
      <InfoBackstage />
      <CoverBackstage />
      <Nav />
    </div>
  )
}

export default BackstageTalks
