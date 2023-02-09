import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditQuote.module.css'

const EditQuote = (props) => {
  const { state } = useLocation()
  const [quote, setQuote] = useState(state)

  console.log(state)
  const handleChange = ({ target }) => {
    setQuote({ ...quote, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateQuote(quote)  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Quote</h1>
        <label htmlFor="quote-input">Quote</label>
        <textarea
          required
          type="quote"
          id="quote-input"
          value={quote.quote}
          placeholder="Quote"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditQuote