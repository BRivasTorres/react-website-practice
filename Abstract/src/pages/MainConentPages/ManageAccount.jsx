import SubPagesHeader from "../../components/common/SubPagesHeader"
import SubPagesLists from "../../components/common/SubPagesLists";
import manageAccountData from "../../mocks/manageAccountDAta";

const ManageAccount = () => {
  return (
		<div>
			<SubPagesHeader pageId={1} />
      <SubPagesLists dataList={manageAccountData} />
		</div>
  );
}

export default ManageAccount
