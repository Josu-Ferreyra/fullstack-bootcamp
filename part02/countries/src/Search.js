import { useEffect, useState } from "react"

export function Search({countries, setFilterCountries, setShowCountry}){
  const [search, setSearch] = useState('')

  useEffect(()=>{
    const filterCountry = 
      countries
        .map((country, index) => [country.name.common, index])
        .filter(country => country[0].toUpperCase().includes(search.toUpperCase()));

    setFilterCountries(filterCountry)
  }, [search, countries, setFilterCountries])
  
  const handleSearch = e => {
    const input = e.target.value
    setSearch(input)
    setShowCountry([false, undefined])
  }
  
  return(
    <div>
      <input value={search} onChange={handleSearch}/>
    </div>
  )
}