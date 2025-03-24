import React, { useState } from 'react';
import Button from './components/button';
import Dropdown from './components/dropdown';

function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]
  
  return (
    <div>
      <Button text="Hello!" onClick={() => { alert(`Selected: ${selectedValue}`) } }/>
      <Dropdown 
      options={options} 
      onChange={(val) => {setSelectedValue(val.target.value)}}/>
    </div>
  );
}

export default App;