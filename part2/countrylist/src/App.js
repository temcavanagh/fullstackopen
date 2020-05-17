import React, { useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [ countryList, setCountryList ] = useState([])
  const [ search, setSearch] = useState('')
  const [ showCountry, setShowCountry] = useState(null)

  const handleSearch = (event) => {setCountryList(event.target.value)}

  const hook = () => {
    const afterData = ( countryData ) => {
      setSearch(countryData.data);
    };
    axios.get('https://restcountries.eu/rest/v2/all').then(afterData);
  };
  useEffect(hook, []);

  // Export Filter as component

  const Filter = ({ countryName, handleChange}) => {
    return (
      <div>
        {countryName}: <input onChange={handleChange}></input>
      </div>
    )
  }

  return(
    <div>
      <Filter countryName="Find countries" onChange={handleSearch} />
    </div>
  )
}

export default App;
