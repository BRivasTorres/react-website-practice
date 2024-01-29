import { useState } from "react";
import FormSearch from "./FormSearch"
import DataSearched from "./DataSearched";

const Search = () => {
  const [isSearched, setIsSearched] = useState(false)
  const [valueSearched, setValueSearched] = useState("")
  
  const handleIsSearched = (state, value) => {
    setIsSearched(state)
    setValueSearched(value)
  }
  
  return (
		<div className="bg-[#DADBF1] flex justify-center items-center flex-col py-[5rem] ">
			<h2 className="text-[4.5rem] font-semibold ">How can we help?</h2>
			<FormSearch search={handleIsSearched} />
      {isSearched && <DataSearched value={valueSearched} /> }
		</div>
  );
}

export default Search
