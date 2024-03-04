import './App.css';
import CustomCards from './Card.js';
import CustomNavbar from './Navbar.js';

function App() {
  return (
      <div className="App">
          <CustomNavbar />
          <h1> C2-230L </h1>
          <h2> Section-002 </h2>
          <p> WVU ID: 800386690 </p>
          <p> Hi I am James </p>
          <CustomCards />
    </div>
  );
}

export default App;