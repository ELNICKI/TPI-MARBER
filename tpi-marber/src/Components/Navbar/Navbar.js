import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <img src={require("../../img/Logo.png")} alt="" />
      <nav class="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <buttom class="Login-btn">Login</buttom>
      </nav>
    </div>
  );
}

export default Navbar;
