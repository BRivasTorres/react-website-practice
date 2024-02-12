import SubPagesHeader from "../../components/common/SubPagesHeader"
import SubPagesLists from "../../components/common/SubPagesLists"
import usingAbstractData from "../../mocks/UsingAbstractData";


const UsingAbstract = () => {
  return (
		<div>
			<SubPagesHeader pageId={0} />
			<SubPagesLists  dataList={usingAbstractData} />
		</div>
  );
}

export default UsingAbstract
