import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const BillingInquiryComponent = () => {
  return (
		<div className="mt-[4rem] text-[#191A1B] text-[1.4rem]">
			<h2 className="text-[2.2rem] font-medium">
				Ask questions about subscriptions and billing
			</h2>
			<p className="bg-[#FFE496] rounded-[15px] px-[1.5rem] py-[1rem] text-[1.5rem] my-[2rem] flex items-center gap-[2rem] ">
				<FontAwesomeIcon icon={faAsterisk} />
                <span>
                    Admins can manage and update billing information on behalf of
                    their Organization directly from the{" "}
                    <a className="extra-links-styles">
                        web app
                    </a>
                    , including{" "}
                    <a className="extra-links-styles">
                        adding more contributor seats
                    </a>
                    , managing billing details, and{" "}
                    <a className="extra-links-styles">
                        locating invoices
                    </a>
                    .
                </span>
			</p>
			<p>
				For security purposes, Support can only assist with billing
				matters if you are an admin or can provide credit card
				information to verify your identity. If you want to use card
				information to verify your identity, you need to provide:
			</p>
			<ul className="ml-[4rem] list-disc my-[2rem] leading-[50px] ">
				<li>The name on the credit card on file</li>
				<li>The last four digits of the card number</li>
				<li>The card expiration date</li>
				<li>
					A screenshot of the last charge that Abstract made to the
					card
				</li>
			</ul>
			<p>
				If you aren't an admin and can't provide the card information
				mentioned above, locate your admin within the web or desktop
				application. Have this person contact Support with your
				questions.
			</p>
		</div>
  );
}

export default BillingInquiryComponent
