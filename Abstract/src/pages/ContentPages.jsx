import { useParams } from "react-router-dom"
import Header from "../components/header/Header"
import TestContent from "../components/TestContent"

const ContentPages = () => {
  const {name} = useParams()
  return (
    <div>
      <Header />
      <TestContent page={name} />
    </div>
  )
}

export default ContentPages
