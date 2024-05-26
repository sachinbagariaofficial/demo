import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const useFetchQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
        headers: { 'X-Api-Key': 'UR1OAih0rwPWz5SDFZOIVa4TCT7blhxKjwKNPqIq' },
      });
      const fetchedQuote = response.data[0];
      setQuote({ ...fetchedQuote, id: uuidv4() });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, []);


  return { quote, loading, error, fetchQuote };
};

export default useFetchQuote;
