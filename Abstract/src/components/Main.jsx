import { useContext } from 'react'
import Search from './Search'
import DataContext from '../context/DataContext'
import DataSearched from './DataSearched'

const Main = () => {
  const {isSearched} = useContext(DataContext)
  
  return (
    <div>
      <Search />
      {isSearched && <DataSearched />}
    </div>
  )
}

export default Main
