import React from 'react'

const NewInput = ({ text, newValue, changeHandler}) => {
    return (
        <div>
            {text}:
            <input 
                value = {newValue}
                onChange = {changeHandler}
            />
        </div>
    )
}

const InputForm = ({ submitHandler, nameValue, nameHandler, numberValue, numberHandler }) => {
    return (
        <form className="InputFrom" onSubmit={submitHandler}>
            <NewInput text="Name" newValue={nameValue} changeHandler={nameHandler}/>
            <NewInput text="Number" newValue={numberValue} changeHandler={numberHandler}/>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default InputForm