import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReviewCard from './components/Cards/ReviewCard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      {/* <ReviewCard /> */}
    </div>
    
    
  );
}

export default App;
