import React, { useState } from 'react';
import Filter from './components/filter.js';
import Persons from './components/persons.js';
import InputForm from './components/inputform.js';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ filterNames, setFilterNames ] = useState('')

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
      
      <h2>Numbers</h2>

      <Persons persons={showContacts()} />
      
    </div>
  )
}

export default App