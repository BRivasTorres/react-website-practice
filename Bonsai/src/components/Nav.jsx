const Nav = () => {
  return (
		<nav className="bg-[#FFFFFF]  w-[85%] mx-auto my-[1.5rem] flex justify-between text-[1.5rem] ">
			<img src="./imgs/logo.svg" alt="" />
			<ul className="flex gap-[2rem] ">
				<li>Product</li>
				<li>Templates</li>
				<li>Pricing</li>
				<li>Reviews</li>
			</ul>

			<aside>
				<button>Log In</button>
				<button>Sart free</button>
			</aside>
		</nav>
  );
}

export default Nav
