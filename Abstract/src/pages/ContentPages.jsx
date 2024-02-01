import { useParams } from "react-router-dom"

const ContentPages = () => {
    const {name} = useParams()
  return (
    <div>
        <h2>Hola {name}</h2>
    </div>
  )
}

export default ContentPages
