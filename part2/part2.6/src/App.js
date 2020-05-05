import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '123' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const existingNames = persons.map(each => each.name)
    const existingNumbers = persons.map(each => each.number)
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

  return (
    <div>
      <h2>Phonebook</h2>
      
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
      
      <h2>Numbers</h2>
      <table>
          <td>{persons.map((persons) => (<li>{persons.name} : {persons.number}</li>))} </td>
      </table>
    </div>
  )
}

export default App