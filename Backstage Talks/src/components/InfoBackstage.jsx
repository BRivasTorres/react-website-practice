const InfoBackstage = () => {
  return (
		<section className="flex flex-col justify-between">
			<h2 className="font-extrabold text-[2rem] uppercase ">
				Backstage Talk
			</h2>
			<div>
				<p className="font-semibold text-[1.2rem] ">
					Backstage Talks is a magazine of casual, but in depth
					dialogues on design and business. Our decisions shape and
					influence this complex world—to have a chance to make the
					right ones, we need to talk.
				</p>
				<h4 className="mb-[2.4rem] text-[.9rem] ">
					© 2024{" "}
					<span className="underline hover:no-underline hover:cursor-pointer">
						<a href="#">Published by Büro Milk</a>
					</span>{" "}
				</h4>
				<a
					href="#"
					className=" font-semibold underline text-[1.2rem] hover:no-underline "
				>
					Privacy policy
				</a>
			</div>
		</section>
  );
}

export default InfoBackstage
