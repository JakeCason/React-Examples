import './App.css';
//css will be added when imported

function App() {
  return (
    <div className='App'>
      {/* All Components must be inside a single compoent / div */}
      <div className='Container'> 
        <div className='Inner'>
          <h1>Hello! {"\n"} </h1>
          <h3>This is a basic react website</h3>
        </div>
      </div>
    </div>
  );
}

export default App;