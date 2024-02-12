import SubPagesHeader from "../../components/common/SubPagesHeader"
import SubPagesLists from "../../components/common/SubPagesLists"
import manageBilingData from "../../mocks/ManageBilingData"

const ManageBilling = () => {
  return (
    <div>
      <SubPagesHeader pageId={4} />
      <SubPagesLists dataList={manageBilingData} />
    </div>
  )
}

export default ManageBilling
