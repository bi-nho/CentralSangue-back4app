import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { DarkModeProvider } from './components/DarkModeContext';

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <AppRoutes />
      </Router>
    </DarkModeProvider>
  );
};

export default App;
