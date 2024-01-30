import { createContext, useState } from "react";

const DataContext = createContext()

const DataProvider = ({children}) => {
    const [isSearched, setIsSearched] = useState(false)
    const [inputSearch, setInputSearch] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSearched(true)
    };
      
    const handleInputSearch = (e) => {
      setInputSearch(e.target.value);
    };
    
    const value = {handleSubmit, isSearched, inputSearch, handleInputSearch}
    
    return <DataContext.Provider value={value} >{children}</DataContext.Provider>
}


export default DataContext
export {DataProvider}