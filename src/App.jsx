import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Update from './pages/Update';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((res) => res.json()),
        revalidateOnFocus: false,
        dedupingInterval: 30000, // 30 seconds
      }}
    >
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/update" element={<Update />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SWRConfig>
  );
}

export default App;
