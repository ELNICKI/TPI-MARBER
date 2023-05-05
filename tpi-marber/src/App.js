import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Banner />
        <Products />
      </div>
    </div>
  );
}

export default App;
