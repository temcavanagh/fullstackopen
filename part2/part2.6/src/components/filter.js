import React from 'react'

const Filter = ({ filter, handleChange }) => {
  return (
      <form>
        <div>
            Filter shown with:
            <input
                value={filter}
                onChange={handleChange}
            />
        </div>
    </form>
  )
}

export default Filter