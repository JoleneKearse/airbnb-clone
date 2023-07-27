import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <nav>
      <div className="container">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </nav>
  )
}

export default NavBar