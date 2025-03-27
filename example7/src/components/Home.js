import React, { useContext } from 'react';
import { AppContext } from '../App';

function Home() {
  const { userName, setUserName } = useContext(AppContext);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the React Router with State demo!</p>
      
      <div className="form-group">
        <label htmlFor="userName">Enter your name:</label>
        <input 
          type="text" 
          id="userName" 
          value={userName} 
          onChange={handleNameChange} 
          placeholder="Your name"
        />
      </div>
      
      {userName && (
        <div className="selected-info">
          <p>Hello, {userName}! Your name will be displayed on all pages.</p>
        </div>
      )}
    </div>
  );
}

export default Home; 