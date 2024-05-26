import React from 'react';

const QuoteItem = ({ quote, startEditing, removeFavorite }) => {
  return (
    <div>
      <section className="flex flex-col justify-center antialiased text-gray-600  p-4">
        <div className="h-full">
          <div className="max-w-2xl mx-auto bg-indigo-600 shadow-lg rounded-lg">
            <div className="px-6 py-5">
              <div className="flex items-start">
                <svg
                  className="fill-current flex-shrink-0 mr-5"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    className="text-indigo-300"
                    d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                  />
                  <path
                    className="text-indigo-200"
                    d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                  />
                  <path
                    className="text-indigo-500"
                    d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                  />
                </svg>

                <div className="flex-grow truncate">
                  <div className="w-full sm:flex justify-between items-center mb-3">
                    <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                      {quote.author}
                    </h2>

                    <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                      <button
                        onClick={() => startEditing(quote)}
                        className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => removeFavorite(quote)}
                        className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="#f15050"
                          className="bi bi-trash-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-end justify-between whitespace-normal">
                    <div className="text-indigo-100">
                      <p className="mb-2">{quote.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteItem;
