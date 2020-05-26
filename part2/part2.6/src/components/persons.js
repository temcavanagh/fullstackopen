import React from "react"

const Person = ({ name, number, delHandler}) => {

    return (
        <div>
            <p>{name}, {number}</p>
            <button value = {name} onClick={delHandler}>Delete contact</button>
        </div>
)}
const Persons = ({ persons, delHandler }) => persons.map(each => <Person key={each.id} name={each.name} number={each.number} delHandler={delHandler}/>)

export default Persons