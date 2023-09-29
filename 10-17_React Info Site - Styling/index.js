function Header() {
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

function MainComponent() {
  return (
    <div className="main-container">
      <h1>Reasons to learn React</h1>
        <ol>
          <li>It facilitates website building</li>
          <li>It's a hirable skill</li>
          <li>It's awesome</li>
        </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer className="page-footer">
      <p>&copy; 2023 eTrifonova Development. All rights reserved.</p>
    </footer>
  )
}

function NewPage() {
    return (
        <div className="body">
          <Header />
          <MainComponent />
          <Footer />
        </div>
  )
}

// ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<NewPage />, document.getElementById('root'));



















// const facts = (
//     <div>
//         <img src="./react-logo.png" alt="React Logo" width="48px"></img>
//         <h1>Fun Facts About React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousdans of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// function TemporaryName() {
//     return (
//         <div>
//             <img src="./react-logo.png" alt="React Logo" width="48px"></img>
//             <h1>Fun Facts About React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100K stars on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousdans of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//         )
// }

// ReactDOM.render(<TemporaryName />, document.getElementById('root'))

// Some requirements according to the convention:
// 1. Pascal case needs to be used for naming functions (TemporaryName instead of temporaryName)
// 2. when calling a function, we need to use angle brackets and omit the parentesis: <TemporaryName /> temporaryName()
