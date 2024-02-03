import SubPagesHeader from "../../components/common/SubPagesHeader"
import usingLists from "../../mocks/UsingAbstractData";


//TODO arreglar estilos en section
const UsingAbstract = () => {
  return (
		<div>
			<SubPagesHeader pageId={0} />
			<section className="mt-[8rem] max-w-[1900px] w-[90%] mx-auto border border-blue-800 flex flex-row flex-wrap justify-between ">
				{usingLists.map((item) => {
					return (
						<div key={item.id} className="border border-green-900">
							<h2 className="text-[3rem] font-medium mb-[2rem] ">
								{item.title}
							</h2>
							{item.list.map((li) => {
								return (
									<ul
										key={item.id}
										className="px-[2.8rem] text-[1.3rem] font-normal"
									>
										<li className="list-disc mb-[.3rem] ">
											{li}
										</li>
									</ul>
								);
							})}
						</div>
					);
				})}
			</section>
		</div>
  );
}

export default UsingAbstract
