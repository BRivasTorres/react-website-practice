const Nav = ({handleBackgroundColor}) => {
  
  const updateColor = (id) => {
    handleBackgroundColor(id)
  }
  
  const issues = [
		"issue #7",
		"issue #6",
		"issue #5",
		"issue #4",
		"issue #3",
		"issue #2",
		"issue #1",
  ];
  return (
		<nav className="flex flex-col justify-between items-end fixed right-[2rem] min-h-[90vh] ">
			<h2 className="font-semibold text-[1.2rem]">
				info@backstagetstalks.com
			</h2>
			<ul className="capitalize text-[1.3rem] ">
        {issues.map((li, id) => {
          return (
            <li key={id} className="hover:underline hover:cursor-pointer">
              <a href={`#issue${id+1}`} onClick={() => updateColor(id)}>{li}</a>
            </li>
			    );
        })}
			</ul>
		</nav>
  );
}

export default Nav
