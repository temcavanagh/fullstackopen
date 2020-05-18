import React, { useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [ countryList, setCountryList ] = useState([]);
  const [ search, setSearch] = useState('');
  const [ showCountry, setShowCountry] = useState({});

  const handleSearch = event => {
    setSearch(event.target.value); 
    setShowCountry({})
  }
  
  const handleShowCountry = country => {
    setShowCountry({ ...country })
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
          <div>{country.name}</div>
          <button onClick={() => handleShowCountry(country)}>Show country</button> 
        </div>
      ))
    }
  } 

  const displaySingleCountry = () => {
    const languages = showCountry.languages.map(language => {
      return <li key={language.name}>{language.name}</li>
    })
    return (
      <div>
        <h2>{showCountry.name}</h2>
        <p>Capital: {showCountry.capital}</p>
        <p>Population: {showCountry.population}</p>
        <p>Languages: </p>
        <ul>{languages}</ul>
        <img src={showCountry.flag} alt="flag" width={250} height={175} />
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