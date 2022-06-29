export function Info({setShowCountry, filterCountries}){
  const handleShowCountry = (index) => {
    setShowCountry([true, index])
  }
  return(
    <div>
      <h2>Countries</h2>
      {
        filterCountries.length > 10 
        ? <p>Too many matches, specify another filter</p> 
        : filterCountries.map((country) => 
          <div key={country[1]}>
            <button onClick={() => handleShowCountry(country[1])} style={{marginRight: "10px"}}>
              Show
            </button>
            <span>{country[0]}</span>
          </div>)
      }
    </div>
  )
}