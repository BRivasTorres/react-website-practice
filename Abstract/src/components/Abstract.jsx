import Header from "./Header"
import {DataProvider} from "../context/DataContext";
import Main from "./Main"

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
