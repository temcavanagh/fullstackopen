import React from "react"

const Filter = ( { search, changeHandler }) => {
  return (
    <form className="filterForm">
      <div>
        Search contacts:
          <input value={search} onChange={changeHandler} />
      </div>
    </form>
  )
}

export default Filter