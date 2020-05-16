import React, { useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [ countryList, setCountryList ] = useState([])
  const [ searchCountry, setSearchCountry] = useState('')

  useEffect (() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => setCountryList(response.data))
  }, [])

  const handleSearch = (event) => {setSearchCountry(event.target.value)}
  const showSearch = (event) => {setSearchCountry(event.target.value)}

  const Filter = ({ filter, handleChange }) => {
    return (
      <div>
          <form>
            Find countries:
            <input value={filter} onChange={handleChange}/>
          </form>
      </div>
    )
  }

  return(
    <div>
      <Filter />
    </div>
  )
}

export default App;
