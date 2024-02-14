import SubPagesHeader from "../../components/common/SubPagesHeader"
import ContactSupportComponent from "../../components/extra/ContactSupportComponent";

const AbstractSupport = () => {
  return (
		<div>
			<SubPagesHeader pageId={5} />
      <section className="mt-[8rem] w-[80%] mx-auto grid grid-cols-[_1fr_auto] gap-x-[200px] ">
        <aside>
			<ContactSupportComponent />    
        </aside>
        <aside>
          <h2>contenido activo</h2>
        </aside>
      </section>
		</div>
  );
}

export default AbstractSupport
