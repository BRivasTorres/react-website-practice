import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";


const FormSearch = () => {
    const {handleSubmit, inputSearch, handleInputSearch} = useContext(DataContext)
    
    const [formStyles, setFormStyles] = useState(false)
    const [isInputFocused, setisInputFocused] = useState(false)
    
    const handleFormStyles = (action) => {
        setFormStyles(action === "enter" || isInputFocused)
    }
    
    
	return (
		<form
			className={`border border-[#020205] bg-[#FFFFFF] p-[1rem] w-[40%] max-w-[1000px] grid grid-cols-[_1fr_auto] items-center mt-[1.5rem] text-[1.3rem] rounded-[5px] ${formStyles ? "border-[#485ACA]" : ""} transition-all duration-500 ease-linear `}
			onMouseEnter={() => handleFormStyles("enter")}
			onMouseLeave={() => handleFormStyles("leave")}
            onSubmit={handleSubmit}
		>
			<input
				type="text"
				placeholder="Search"
				className="placeholder:text-[#B39999] border-none outline-transparent"
                onFocus={() => setisInputFocused(true)}
                onBlur={() => setisInputFocused(false)}
                value={inputSearch}
                onChange={handleInputSearch}
			/>
			<FontAwesomeIcon icon={faArrowRight} className={`${formStyles ? "text-[#485ACA]" : ""}`}/>
		</form>
	);
};

export default FormSearch;
