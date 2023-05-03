import "./Navbar.css";
import images from "../../assets/images";

function Navbar() {
  return (
    <header>
      <img src={require(images.logo)} />
      <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <buttom class="Login-btn">Login</buttom>
      </nav>
    </header>
  );
}

export default Navbar;
