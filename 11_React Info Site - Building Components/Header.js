// the file name starts with a capital letter

export default function Header() {
  return (
    <header>
      <nav className="navigation">
        <img src="./react-logo.png" alt="React Logo" className="nav-img" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

