import React from 'react';
import Header from './Home/Header'; // Import the Header component
import Footer from './Home/Footer'; // Import the Footer component
import './App.css'; // Import the existing CSS file

function App() {
  return (
    <div className="App">
      {/* Add Header Component */}
      <Header />

      {/* Main Content */}
      <main>
        <h1>Welcome to One Click Internship</h1>
        <p>Explore internship opportunities tailored to your needs!</p>
      </main>

      {/* Add Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
