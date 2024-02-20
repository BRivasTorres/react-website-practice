const Nav = () => {
  return (
		<nav className="flex flex-col justify-between items-end ">
			<h2 className="font-semibold text-[1.5rem] ">
				info@backstagetstalks.com
			</h2>
			<ul className="capitalize text-[1.3rem] ">
				<li>
					<a href="">issue #7</a>
				</li>
				<li>
					<a href="">issue #6</a>
				</li>
				<li>
					<a href="">issue #5</a>
				</li>
				<li>
					<a href="">issue #4</a>
				</li>
				<li>
					<a href="">issue #3</a>
				</li>
				<li>
					<a href="">issue #2</a>
				</li>
				<li>
					<a href="">issue #1</a>
				</li>
			</ul>
		</nav>
  );
}

export default Nav
