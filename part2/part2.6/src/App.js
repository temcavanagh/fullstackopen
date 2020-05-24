import React, { useState, useEffect } from 'react';
import Filter from './components/filter.js';
import Persons from './components/persons.js';
import InputForm from './components/inputform.js';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterNames, setFilterNames ] = useState('')

    useEffect (() => {
      console.log('effect')
      axios
          .get('http://localhost:3001/persons')
          .then(response => {
              console.log('promise fulfilled')
              setPersons(response.data)
          })
  }, [])

  console.log('render', persons.length, 'notes')

  const addPerson = (event) => {
    event.preventDefault()
    const existingNames = persons.map(each => each.name)
    if (!existingNames.includes(newName)){
      const personsObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personsObject))

      // personservice here

    } else {
        alert(`${ newName } is already added to the phonebook`)
        return
    }
    setNewName('')
    setNewNumber('')
  } 

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => setFilterNames(event.target.value)

  const filterPersons = filterNames === ''
    ? persons : persons.filter(person => person.name.toLowerCase().includes(filterNames.toLowerCase()))

  const showContacts = () => filterPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)

  return (
    <div>

      <form onChange={handleFilter}>
        <Filter value={filterNames}/>
      </form>
    
    <div>

      <h2>Contacts</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <InputForm 
        onSubmit={addPerson} 
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
    </div>

      <h2>Numbers</h2>

      <Persons persons={showContacts()} />
      
    </div>
  )
}

export default App