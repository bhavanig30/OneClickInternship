import React from 'react';
import Header from './Home/Header'; // Import the Header component
import Hero from './Home/Hero'; // Hero Component
import './App.css'; // Keep the existing CSS file

function App() {
  return (
    <div className="App">
      {/* Add Header Component */}
      <Header />
      {/* Placeholder for other content */}
      <main>
        <h1>Welcome to One Click Internship</h1>
        <p>Explore internship opportunities tailored to your needs!</p>
      </main>
    </div>
  );
}

export default App;