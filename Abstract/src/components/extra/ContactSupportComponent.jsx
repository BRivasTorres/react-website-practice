import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const ContactSupportComponent = () => {
	return (
		<div className="text-[#191A1B] text-[1.4rem] font-medium w-[100%]">
			<h4 className="bg-[#FFE496] rounded-[15px] px-[1.5rem] py-[1rem] flex items-center gap-x-[2rem] font-semibold text-[1.5rem] ">
				<FontAwesomeIcon icon={faAsterisk} />
				Support hours are Monday-Friday 05:00-18:00 Pacific Time. We
				observe all U.S. holidays.
			</h4>
			<h2 className="mt-[2em]">
				Unable to sign in?
				<span className="underline">Reach us here.</span>
			</h2>
			<section className="mt-[3rem] ">
				<h3 className="text-[3rem] ">Contact Support</h3>
				<ol className="list-decimal ml-[5rem] flex flex-col gap-y-[1rem] ">
					<li className="mb-[2rem] ">
						While signed in to Abstract, select the{" "}
						<FontAwesomeIcon
							icon={faCircleQuestion}
							className="text-[#A6A8A9] bg-[#F6F7F7] p-[.4rem] text-[1rem] rounded-[8px]"
						/>{" "}
						Support icon.
						<ol className="list-[circle] ml-[3rem] mt-[1.6rem] flex flex-col items-end ">
							<li>
								If you're in the Abstract web app, the{" "}
								<FontAwesomeIcon
									icon={faCircleQuestion}
									className="text-[#A6A8A9] bg-[#F6F7F7] p-[.4rem] text-[1rem] rounded-[8px]"
								/>{" "}
								Support icon is in the lower left corner.
							</li>
							<li>
								If you're in the Abstract Desktop app, the{" "}
								<FontAwesomeIcon
									icon={faCircleQuestion}
									className="text-[#A6A8A9] bg-[#F6F7F7] p-[.4rem] text-[1rem] rounded-[8px] "
								/>
								Supporticon is in the upper right corner.
							</li>
						</ol>
					</li>
					<li>
						Select <strong>Contact Support.</strong>
					</li>
					<li>
						On the Contact Support page, choose the{" "}
						<strong>Topic</strong> you want to contact Support
						about, write a <strong>Subject</strong> for your
						message, and enter a <strong>Description</strong> of
						your issue.
					</li>
					<li>
						If you have files you want to give Support, such as bug
						reports or screenshots, click{" "}
						<strong>Browse files...</strong> and choose them from
						your computer.
					</li>
					<li>
						When you're done, click{" "}
						<strong>Send to Support.</strong>
					</li>
				</ol>
			</section>
		</div>
	);
};

export default ContactSupportComponent;
