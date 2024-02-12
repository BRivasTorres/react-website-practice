import SubPagesHeader from "../../components/common/SubPagesHeader"
import SubPagesLists from "../../components/common/SubPagesLists"
import manageOrganizationsData from "../../mocks/ManageOrganizationsData"

const ManageOrganizations = () => {
  return (
    <div>
      <SubPagesHeader pageId={2} />
      <SubPagesLists dataList={manageOrganizationsData} />
    </div>
  )
}

export default ManageOrganizations
