import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {

  const [text, setText] = useState('')
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      setSearchTerm(text)
    }
  }

  const handleRandomMeal = () => {
    setSearchTerm("")
    setText("")
    fetchRandomMeal()
  }


  return (
    <header className="search-container">
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={handleChange}  value={text} placeholder="type favorite meal" className="form-input"/>
        <button type="submit" className="btn">search</button>
        <button type="button" onClick={handleRandomMeal} className="btn btn-hipster" >Surprise Me !</button>
      </form>
    </header>
  )
}

export default Search;