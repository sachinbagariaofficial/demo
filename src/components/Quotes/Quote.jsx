import React from 'react';
import { useQuoteContext } from '../../context/QuoteContext';
import { toast } from 'react-toastify';

const Quote = ({ quote, fetchQuote }) => {
  const { favorites, addFavorite } = useQuoteContext();

  // Function to handle adding a quote to favorites
  const handleFavorite = () => {
    if (!favorites.some((fav) => fav.id === quote.id)) {
      addFavorite(quote);
    } else {
      toast.warning('This quote is already favorited! Please fetch new quote');
    }
  };

  return (
    <div>
      <p>{quote.quote}</p>
      <p>
        <span className="font-semibold ">Author</span> — {quote.author}
      </p>
      <button
        className=" mt-4 text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
        onClick={handleFavorite}
      >
        Favorite
      </button>
    </div>
  );
};

export default Quote;
