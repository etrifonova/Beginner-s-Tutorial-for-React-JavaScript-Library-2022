// ПРОДОЛЖИТЬ С 1:10:53


function NewPage() {
    return (
        <div>
          <header>
            <nav>
              <img src="./react-logo.png" alt="React Logo" width="48" />
            </nav>
          </header>
          <h1>Reasons to learn React</h1>
            <ul>
              <li>It facilitates website building</li>
              <li>It's a hirable skill</li>
              <li>It's awesome</li>
              </ul>
          <footer>
            <p>&copy; 2023 eTrifonova Development. All rights reserved.</p>
          </footer>
        </div>
  )
}

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
