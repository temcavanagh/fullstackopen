import React, { useState, useEffect } from "react"
import './index.css'
import Filter from "./components/filter.js"
import InputForm from "./components/inputform.js"
import Persons from "./components/persons.js"
import personService from "./components/personservice.js"
import Message from "./components/message.js"

const App = () => {

    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ searchStr, setSearchStr] = useState('')
    const [ message, setMessage ] = useState('')
    const [ errorMsg, setErrorMsg ] = useState(false)

    useEffect( () => {
        personService
            .getAll()
            .then((ppl) => {
                setPersons(ppl)
            })
    }, [])

    const handleNewName = (event) => setNewName(event.target.value)
    const handleNewNumber = (event) => setNewNumber(event.target.value)
    const handleSearchStr = (event) => setSearchStr(event.target.value)
    const handleDel = (event) => {
        let name = event.target.value
        let id = persons.find(p => p.name === name).id
        let delPerson = window.confirm(`Confirm deletion of ${name}?`)
        if (delPerson) { 
            personService
                .erase(id)
                .then(setPersons(persons.filter(each => each.id !== id)))
                .then( () =>
                    {setErrorMsg(false)
                    setMessage(`${name} was deleted from the phonebook.`)
                    setTimeout( () => {setMessage('')}, 1000)}
                )
        }
    }

    const addPerson = (event) => {
        event.preventDefault()
        const currentNames = persons.map(each => each.name)
        const currentNumbers = persons.map(each => each.number)
        if (!currentNames.includes(newName)) {
            const newPerson = {
                name: newName,
                number: newNumber,
            }
            personService
                .create(newPerson)
                .then(newPeep => {
                    setPersons(persons.concat(newPeep))
                    setNewName('')
                    setNewNumber('')
                })
                .then( () => {
                    setErrorMsg(false)
                    setMessage(`${newName} was added to the phonebook.`)
                    setTimeout( () => {setMessage('')}, 1000)
                })
                .catch(error => {
                    setMessage(error.response.data.error)
                    setErrorMsg(true)
                    setTimeout( () => {setMessage('')}, 1000)
                })

        } else if (currentNames.includes(newName) && !currentNumbers.includes(newNumber)) {
            let id = persons.find(each => (each.name === newName)).id
            let updateNum = window.confirm(`Update number for ${newName}?`)
            if (updateNum) {
                let person = persons.find(each => each.id === id)
                let updatePerson = {...person, number : newNumber }
                personService   
                    .update(id, updatePerson)
                    .then(returnedPersons => {
                        setPersons(persons.map(each => (each.id !== id) ? each : returnedPersons))
                        setMessage(`${newName}'s number has been updated.`)
                        setTimeout( () => {setMessage('')}, 1000)
                        setErrorMsg(false)
                    })
                    .catch(error => {
                        setMessage(`${newName} was already removed from the server`)
                        setTimeout( () => {setMessage('')}, 1000)
                        setPersons(persons.filter(each => each.id !== id))
                        setErrorMsg(true)
                    }
                )    
            }

        } else {
            setMessage(`${newName} is already added to the phonebook`)
            setErrorMsg(true)
            setTimeout( () => {setMessage('')}, 1000)
        }
    }

    var regEx = new RegExp("^"+searchStr)
    const personsToShow = (searchStr !== "") ? persons.filter(each => each.name.match(regEx)) : persons

    return (
        <div>
            <div>
            <h2>Phonebook</h2>
            <div>
                <Filter search = {searchStr} changeHandler = {handleSearchStr}/>
                <Message message={message} errorMsg={errorMsg} />
            </div>
            <div>    
                <h2>Add a New Person</h2>
                <InputForm submitHandler={addPerson} nameValue={newName} nameHandler={handleNewName} numberValue={newNumber} numberHandler={handleNewNumber} />
            </div>    
            <div>  
                <h2>Numbers</h2>
                <Persons persons = {personsToShow} delHandler={handleDel}/>
            </div>
            </div>
        </div>
    )
}

export default App