import { useEffect, useState } from 'react'
import { Search } from "./Search";
import { Info } from './Info';
import { ShowCountry } from './ShowCountry';
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [showCountry, setShowCountry] = useState([false, undefined])
  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
  },[])
  return (
    <div className="App">
      <Search countries={countries} setFilterCountries={setFilterCountries} setShowCountry={setShowCountry}/>
      {
        showCountry[0]
        ? <ShowCountry countries={countries} index={showCountry[1]}/>
        : <Info filterCountries={filterCountries} setShowCountry={setShowCountry}/>
      }
    </div>
  );
}

export default App;