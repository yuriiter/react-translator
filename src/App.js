import React, { useEffect } from 'react'
import './App.scss'
import Header from './Components/Header'
import Results from './Components/Results'
import Buttons from './Components/Buttons'
import {fetchData} from './Utils/fetchData'


function App() {
  const [fetchedData, setFetchedData] = React.useState({})

  const getDataFromHeader = (data) => {
    fetchData(data).then(response => setFetchedData(response))
  }

  return (
    <div style={{fontFamily: 'Roboto'}}>
      <Header fetchDataHandler={getDataFromHeader} />
      <Results data={fetchedData} />
      <Buttons />
    </div>
  )
}

export default App;
