import { useEffect, useState } from 'react'
import { Search } from "./Search";
import { Info } from './Info';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  },[])
  return (
    <div className="App">
      <Search countries={countries} setFilterCountries={setFilterCountries}/>
      <Info countries={countries} filterCountries={filterCountries}/>
    </div>
  );
}

export default App;