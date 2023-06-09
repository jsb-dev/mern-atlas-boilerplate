import React from 'react';
import env from 'react-dotenv';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const { REACT_APP_API_URL } = env;
  const connect = async () => {
    const response = await fetch(`${REACT_APP_API_URL}connect`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data.message);
  };

  // call connect on page load
  connect();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <header className="App-header"></header>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
