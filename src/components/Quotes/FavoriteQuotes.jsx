import React, { useState } from 'react';
import { useQuoteContext } from '../../context/QuoteContext';
import QuoteItem from './QuoteItem';
import { toast } from 'react-toastify';

const FavoriteQuotes = ({ quotes }) => {
  const { removeFavorite, editQuote } = useQuoteContext();
  const [editMode, setEditMode] = useState(null);

  const [editedText, setEditedText] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');

  // function to start editing a quote
  const startEditing = (quote) => {
    setEditMode(quote.id);

    setEditedText(quote.quote);
    setEditedAuthor(quote.author);
  };

  // Function to cancel editing
  const cancelEditing = () => {
    setEditMode(null);
  };
  // Function to save the edited quote
  const saveEdit = (quoteId) => {
    editQuote({ id: quoteId, quote: editedText, author: editedAuthor });

    setEditMode(null);
  };

  return (
    <div className="px-6 md:px-auto">
      <h2 className="text-3xl font-bold sm:text-4xl">Favorite Quotes</h2>

      {quotes.length === 0 ? (
        <p className="mt-4 text-xl text-gray-600">No favorite quotes.</p>
      ) : (
        quotes?.map((quote) => (
          <div key={quote.id}>
            {editMode === quote.id ? (
              <div className="mx-auto max-w-xs">
                <div
                  id="crud-modal"
                  tabIndex=""
                  aria-hidden="true"
                  className=" bg-[#0000004d] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                  <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Edit Quote
                        </h3>
                        <button
                          onClick={cancelEditing}
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                          data-modal-toggle="crud-modal"
                        >
                          <span className="sr-only">Close modal</span>

                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                        </button>
                      </div>

                      <form className="p-4 md:p-5">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                          <div className="col-span-2">
                            <label
                              htmlFor="name"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Author
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Author name"
                              required=""
                              value={editedAuthor}
                              onChange={(e) => setEditedAuthor(e.target.value)}
                            />
                          </div>

                          <div className="col-span-2">
                            <label
                              htmlFor="description"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Product Description
                            </label>
                            <textarea
                              id="description"
                              rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg- rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                              placeholder="Quote description here"
                              value={editedText}
                              onChange={(e) => setEditedText(e.target.value)}
                            ></textarea>
                          </div>
                        </div>

                        <button
                          onClick={() => saveEdit(quote.id)}
                          type="button"
                          className="text-white inline-flex items-center bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <QuoteItem
                  quote={quote}
                  removeFavorite={removeFavorite}
                  startEditing={startEditing}
                />
                {/* <button onClick={() => removeFavorite(quote)}>Remove</button>
                <button onClick={() => startEditing(quote)}>Edit</button> */}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriteQuotes;
