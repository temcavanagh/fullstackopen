import React from 'react'

const Filter = ({ filter, handleChange }) => {
  return (
    <div>
        <h2>Phonebook</h2>
    <form>
        Filter shown with:
        <input value={filter} onChange={handleChange}/>
    </form>
    </div>
  )
}

export default Filter