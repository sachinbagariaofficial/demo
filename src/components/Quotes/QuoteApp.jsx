import React from 'react';

import useFetchQuote from '../../hooks/useFetchQuote';
import { useQuoteContext } from '../../context/QuoteContext';
import FavoriteQuotes from './FavoriteQuotes';
import Loader from '../Common/Loader';
import { ToastContainer } from 'react-toastify';
import Quote from './Quote';
const QuoteApp = () => {
  const { quote, loading, fetchQuote } = useFetchQuote();
  const { favorites } = useQuoteContext();

  return (
    <div>
      <ToastContainer />

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Generate Quotes on Demand
          </h1>
          {loading ? (
            <Loader />
          ) : (
            quote && (
              <>
                <Quote key={quote.id} quote={quote} />
              </>
            )
          )}
          <div className="flex flex-col mt-6 mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button
              disabled={loading ? true : false}
              onClick={fetchQuote}
              className={` text-white ${loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600'}   focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800 `}
            >
              Get Random Quote
            </button>
          </div>
        </div>
      </section>

      <FavoriteQuotes quotes={favorites} />
    </div>
  );
};

export default QuoteApp;
