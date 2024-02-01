import AbstractSupport from "../pages/MainConentPages/AbstractSupport"

const TestContent = ({page}) => {
  return (
    <div>
        {page === "UsingAbstract" && <AbstractSupport />}
        <h1 className="text-[2rem] text-red-800 ">{page}</h1>
    </div>
  )
}

export default TestContent
