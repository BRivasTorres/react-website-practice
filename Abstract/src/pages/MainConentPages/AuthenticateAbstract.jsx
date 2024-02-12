import SubPagesHeader from "../../components/common/SubPagesHeader"
import SubPagesLists from "../../components/common/SubPagesLists"
import authenticateData from "../../mocks/AuthenticateData"

const AuthenticateAbstract = () => {
  return (
    <div>
      <SubPagesHeader pageId={5} />
      <SubPagesLists dataList={authenticateData} />
    </div>
  )
}

export default AuthenticateAbstract
