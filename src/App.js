import React, { useState } from 'react';
import './App.css';


import Front from './Components/Front';
import About from './Components/About';
import Chef from './Components/Chef';
import Gallery from './Components/Gallery';
import Reservation from './Components/Reservation';
import Outlets from './Components/Outlets';
import End from './Components/End';
import Top from './Components/Top';
import Spinner from './Components/Spinner';  
import Toast from './Components/Toast';      

function App() {
  const [loading, setLoading] = useState(true);  // Loading state
  const [showToast, setShowToast] = useState(false);  // State to control toast visibility

  // Simulate loading delay
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowToast(true); // Show the toast after loading completes
    }, 3000);
  }, []);

  const handleCloseToast = () => {
    setShowToast(false); // Close the toast when close button is clicked
  };

  return (
    <div className="App">
      {/* Conditionally render spinner */}
      {loading ? (
        <Spinner />
      ): (
        <>
          <Front />
          <About />
          <Chef />
          <Gallery />
          <Reservation />
          <Outlets />
          <End />
          <Top />

          {/* Render toast notification */}
          <Toast show={showToast} onClose={handleCloseToast} />
        </>
      )}
    </div>
  );
}

export default App;
