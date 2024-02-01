import { useContext } from "react";
import DataContext from "../../context/DataContext";

const DataSearched = () => {
    const {inputSearch} = useContext(DataContext)
    
  return (
		<div className="bg-white flex flex-col gap-[4rem] mx-[6rem] my-[7rem] ">
            <aside>
                <h2 className="text-[2.4rem] font-semibold ">
                    Search results "{`${inputSearch}`}"
                </h2>
                <p className="text-[#696B6C] text-[1.5rem]">
                    No results found for{" "}
                </p>
            </aside>
            <aside>
                <h2 className="text-[1.8rem] font-semibold ">Knwoledge base</h2>
                <p className="text-[#696B6C] text-[1.5rem]">
                    No results for "{`${inputSearch}`}".
                    <span className="text-[#191A1B] ">Browse knowledge base</span>
                </p>
            </aside>
		</div>
  );
}

export default DataSearched