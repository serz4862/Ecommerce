// import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import Homepage from './customer/pages/HomePage/Homepage';

function App() {
  return (
    <div className="App">
      Hello Ecommerce Website;
      <div>
        <Navigation/>
        <Homepage/>
      </div>

    </div>

  );
}

export default App;
