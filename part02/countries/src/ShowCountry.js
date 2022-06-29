import axios from "axios"
import { useEffect, useState } from "react"

export function ShowCountry({countries, index}){
  const [apiData, setApiData] = useState({temp : "", icon: "", wind: ""})
  const api_key = process.env.REACT_APP_API_KEY
  const elegido = countries[index]
  const languages = Object.values(elegido.languages)
  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${elegido.capital}`)
      .then(response => {
        const data = {
          temp : response.data.current.temp_c,
          icon : response.data.current.condition.icon,
          wind : response.data.current.wind_kph
        }
        setApiData(data)
      })      
  },[elegido.capital, api_key])
  return (
    <div>
      <h2>{elegido.name.common}</h2>
      <p>Capital: {elegido.capital}</p>
      <p>Area: {elegido.area}</p>
      <h3>Languages</h3>
      <ul>{languages.map((language,index) => <li key={index}>{language}</li>)}</ul>
      <img style={{border: "1px solid black"}} src={elegido.flags.png} alt=""></img>
      <h3>Weather in {elegido.capital}</h3>
      <p>Tempeture {apiData.temp}° Celcius</p>
      <img src={apiData.icon} alt=""></img>
      <p>Wind {apiData.wind} km/h</p>
    </div>
  )
}