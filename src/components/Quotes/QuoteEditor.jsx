import React, { useState } from 'react';
import { useQuoteContext } from '../../context/QuoteContext';

const QuoteEditor = ({ quote }) => {
  const { editQuote } = useQuoteContext();
  const [text, setText] = useState(quote.text);
  const [author, setAuthor] = useState(quote.author);

  // Function to handle form submission for editing a quote
  const handleSubmit = (e) => {
    e.preventDefault();
    editQuote({ ...quote, text, author });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default QuoteEditor;
