export function Info({countries, filterCountries}){
  const countriesList =
    <ul>
      {filterCountries.map((country) => 
        <li key={country[1]}>{country[0]}</li>
      )}
    </ul>
  
  if (filterCountries.length === 1){
    const elegido = countries[filterCountries[0][1]]
    const languages = Object.values(elegido.languages)    
    return (
      <div>
        <h2>{elegido.name.common}</h2>
        <p>Capital: {elegido.capital}</p>
        <p>Area: {elegido.area}</p>
        <h3>Languages</h3>
        <ul>{languages.map((language,index) => <li key={index}>{language}</li>)}</ul>
        <img style={{border: "1px solid black"}} src={elegido.flags.png} alt=""></img>
      </div>
    )
  }
  return(
    <div>
      <h2>Countries</h2>
      {filterCountries.length > 10 ? <p>Too many matches, specify another filter</p> : countriesList}
    </div>
  )
}