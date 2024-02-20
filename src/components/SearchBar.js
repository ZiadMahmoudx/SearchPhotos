import { useState } from "react"
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("")
  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }
  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  return (
    <div className="level-item" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div className="field has-addons">
        <div className="control" style={{ width: "100%" }}>
          <form onSubmit={handleFormSubmit}>
            <input className="input is-expanded" type="text" value={term} onChange={handleChange} />
          </form>
        </div>
        <div className="control">
          <button className="button is-info" onClick={handleFormSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
