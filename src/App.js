import React from 'react';
import { AuthProvider, useAuthContext } from './context/AuthContext';
import { QuoteProvider } from './context/QuoteContext';
import Login from './components/Auth/Login';
import Header from './components/Common/Header';
import QuoteApp from './components/Quotes/QuoteApp';

  import 'react-toastify/dist/ReactToastify.css';

const AppContent = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Header />
      {user ? <QuoteApp /> : <Login />}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <QuoteProvider>
        <AppContent />
      </QuoteProvider>
    </AuthProvider>
  );
};

export default App;
