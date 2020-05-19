import React, { useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [ countryList, setCountryList ] = useState([]);
  const [ search, setSearch] = useState('');
  const [ showCountry, setShowCountry] = useState({});

  const weatherData = async country => {
    let response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_KEY}`
    )
    return response.data
  }
  
  const handleSearch = event => {
    setSearch(event.target.value); 
    setShowCountry({})
  }

  const handleShowCountry = country => {
    weatherData(country).then(data => {
      setShowCountry({ ...country, weather: data })
    })
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {setCountryList(res.data)})
  }, []);
  
  const displayCountries = () => {
    const filterCountries = countryList.filter(country => {
      return country.name.toLowerCase().includes(search);
    })
    if (filterCountries.length > 30 ) return '';
    if (filterCountries.length > 10) {
      return <li>Over ten matches</li>;
    } else {
      return filterCountries.map(country => (
        <div key={country.name}>
          <div>{country.name}<button onClick={() => handleShowCountry(country)}>Show</button> </div>
        </div>
      ))
    }
  } 

  const displaySingleCountry = () => {
    const languages = showCountry.languages.map(language => {
      return <li key={language.name}>{language.name}</li>
    })
    const weather = showCountry.weather.weather[0].main
    const temperature = Math.round(showCountry.weather.main.temp -273)
    const wind = showCountry.weather.wind[0].speed
    return (
      <div>
        <h2>{showCountry.name}</h2>
        <p>Capital: {showCountry.capital}</p>
        <p>Population: {showCountry.population}</p>
        <p>Languages: </p>
        <ul>{languages}</ul>
        <img src={showCountry.flag} alt="flag" width={250} height={175} />
        <h3>Weather in {showCountry.capital}</h3>
        <div>Temperature: {temperature}</div>
        <div>Weather: {weather}</div>
        <div>Wind speed: {wind}</div>
      </div>
    )
  }

  return (
    <div>
      <div>
        <div>Find countries:</div>
        <input onChange={handleSearch} value={search} />
      </div>
      {countryList.length && displayCountries()}
      {showCountry.name && displaySingleCountry()}
    </div>
  )
}

export default App;