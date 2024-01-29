const DataSearched = ({value}) => {
  return (
		<div className="bg-white flex flex-col gap-[1.2rem] ">
            <aside>
                <h2 className="text-[2rem] font-semibold ">
                    Search results "{`${value}`}"
                </h2>
                <p className="text-[#696B6C] text-[1.3rem]">
                    No results found for{" "}
                </p>
            </aside>
            <aside>
                <h2 className="text-[1.5rem] font-semibold ">Knwoledge base</h2>
                <p className="text-[#696B6C] text-[1.3rem]">
                    No results for "{`${value}`}".
                    <span className="text-[#191A1B] ">Browse knowledge base</span>
                </p>
            </aside>
		</div>
  );
}

export default DataSearched