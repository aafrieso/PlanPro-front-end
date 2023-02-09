import React, { useState } from "react";

// import styles from "./Quotes.module.css";

const Quote = (props) => {
  const [quote, setQuote] = useState({quote: ''});
  console.log(quote);
  const handleChange = ({target}) => {
    setQuote({...quote, [target.name]: target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddQuote(quote)
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Quote</h1>
        <label> Add an Inspirational Quote here!</label>
        <input type="text" name="quote" value={quote.quote} onChange={handleChange} /> 
        <button style={{color: "black" }} type="submit">Submit</button>
      </form>
      {props.quotes.map((q) => (
        <p key={q._id}>
          {q.quote}
        </p>
      ))}
    </>
  );
};

export default Quote;
