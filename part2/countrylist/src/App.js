import React, { useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => {
  const countries = response.data
  console.log(countries)
  })

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
