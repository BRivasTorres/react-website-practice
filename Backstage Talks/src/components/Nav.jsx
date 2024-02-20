const Nav = () => {
  return (
		<nav className="flex flex-col justify-between items-end fixed right-[2rem] min-h-[90vh] ">
			<h2 className="font-semibold text-[1.2rem]">
				info@backstagetstalks.com
			</h2>
			<ul className="capitalize text-[1.3rem] ">
				<li className="hover:underline">
					<a href="#issue7">issue #7</a>
				</li>
				<li className="hover:underline">
					<a href="#issue6">issue #6</a>
				</li>
				<li className="hover:underline">
					<a href="#issue5">issue #5</a>
				</li>
				<li className="hover:underline">
					<a href="#issue4">issue #4</a>
				</li>
				<li className="hover:underline">
					<a href="#issue3">issue #3</a>
				</li>
				<li className="hover:underline">
					<a href="#issue2">issue #2</a>
				</li>
				<li className="hover:underline">
					<a href="#issue1">issue #1</a>
				</li>
			</ul>
		</nav>
  );
}

export default Nav
