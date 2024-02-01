import {DataProvider} from "../context/DataContext";
import Header from "./header/Header"
import Main from "./main/Main"

const Abstract = () => {
  
  return (
		<div>
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
		</div>
  );
}

export default Abstract
