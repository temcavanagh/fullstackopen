import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ warning, setWarning ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const existingNames = persons.map(each => each.name)
    if (!existingNames.includes(newName)){
      const personsObject = {
        name: newName,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personsObject))
    } else {
        setWarning('')
        window.alert( {newName} + 'is already added')
    }
    setNewName('')
  } 

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handlePersonChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      <ul>
        {persons.map((persons) => (<li>{persons.name}</li>))}
      </ul>
    </div>
  )
}

export default App