import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/ResizableNavbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
