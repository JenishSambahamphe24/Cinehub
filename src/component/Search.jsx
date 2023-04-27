import React, { useState } from 'react'
import { useGlobalContext } from '../context'

function Search() {
  const { querry, setQuerry, isError } = useGlobalContext();
  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
  const handleOnChange = (e) => {
    setQuerry(e.target.value)
  }
  return (
    <div>
      <section className="search text-center mt-5">
        <h2>Search Movies</h2>
        <form action="" onSubmit={handleOnSubmit}>
          <div>
            <input type="text" value={querry} onChange={handleOnChange} />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </div>
  )
}

export default Search


