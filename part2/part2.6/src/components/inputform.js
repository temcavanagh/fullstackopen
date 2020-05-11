import React from 'react';

const InputForm = ({ onSubmit, handlePersonChange, handleNumberChange }) => {
    return(
        <div>
        <h2>Contacts Commponent</h2>
        <form onSubmit={onSubmit}>
            <div>
                Name: <input onChange={handlePersonChange}/>
            </div>
            <div>
                Number: <input onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
        </div>
    )
}

export default InputForm