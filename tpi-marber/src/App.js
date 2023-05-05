import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <div className="bg">
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <body>
          <Banner />
          <Products />
        </body>
        <div></div>
      </div>
    </div>
  );
}

export default App;
