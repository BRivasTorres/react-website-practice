import {DataProvider} from "../context/DataContext";
import Footer from "./footer/Footer";
import Header from "./header/Header"
import Main from "./main/Main"

const Abstract = () => {
  
  return (
		<div>
      <DataProvider>
        <Header />
        <Main />
        <Footer />
      </DataProvider>
		</div>
  );
}

export default Abstract
