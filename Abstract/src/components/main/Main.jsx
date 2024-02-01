import { useContext } from 'react'
import MainSearch from './MainSearch'
import DataContext from '../../context/DataContext'
import DataSearched from './DataSearched'
import MainContent from './MainContent'

const Main = () => {
  const {isSearched} = useContext(DataContext)
  
  return (
		<div>
			<MainSearch />
			{isSearched ? <DataSearched /> : <MainContent />}
		</div>
  );
}

export default Main
