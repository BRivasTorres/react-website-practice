import SubPagesHeader from "../../components/common/SubPagesHeader"
import BillingInquiryComponent from "../../components/extra/BillingInquiryComponent";
import ContactSupportComponent from "../../components/extra/ContactSupportComponent";
import SalesInquiryComponent from "../../components/extra/SalesInquiryComponent";

const AbstractSupport = () => {
  return (
		<div>
			<SubPagesHeader pageId={5} />
      <section className="mt-[8rem] w-[80%] mx-auto ">
        <aside className="w-[80%] ">
          <ContactSupportComponent />    
          <BillingInquiryComponent />
          <SalesInquiryComponent />
        </aside>
      </section>
		</div>
  );
}

export default AbstractSupport
