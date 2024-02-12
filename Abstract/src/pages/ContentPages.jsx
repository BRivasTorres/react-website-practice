import { useParams } from "react-router-dom"
import Header from "../components/header/Header"
import Home from "./Home";
import { useEffect, useState } from "react";
import UsingAbstract from "./MainConentPages/UsingAbstract";
import ManageAccount from "./MainConentPages/ManageAccount";
import ManageOrganizations from "./MainConentPages/ManageOrganizations";
import ManageBilling from "./MainConentPages/ManageBilling";
import AuthenticateAbstract from "./MainConentPages/AuthenticateAbstract";
import AbstractSupport from "./MainConentPages/AbstractSupport";
import Footer from "../components/footer/Footer";

const ContentPages = () => {
  const [currentPage, setCurrentPage] = useState(<Home />);
  const {name} = useParams()
  
  useEffect(() => {     
      switch (name) {
        case "UsingAbstract":
          setCurrentPage(<UsingAbstract />);
          break;
        case "ManageAccount":
          setCurrentPage(<ManageAccount />);
          break;
        case "ManageOrganizations":
          setCurrentPage(<ManageOrganizations />);
          break;
        case "ManageBilling":
          setCurrentPage(<ManageBilling />);
          break;
        case "AuthenticateAbstract":
          setCurrentPage(<AuthenticateAbstract />);
          break;
        case "AbstractSupport":
          setCurrentPage(<AbstractSupport />);
          break;
        default:
          setCurrentPage(<Home />);
      }  
  }, [name]);
  
  return (
    <div>
      <Header />
      {currentPage}
      <Footer />
    </div>
  )
}

export default ContentPages
