// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//             </nav>

//     )
// }

// function MainContent() {
//     return (
//         <h1>I'm learning React</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// let header = document.querySelector(".header");
// let divBlock = document.getElementById("root");
// header.textContent = "Hard!";
// divBlock.appendChild(header);
// console.log(divBlock)

// const h1 = document.createElement("h1");
// h1.textContent = "Complicated";
// h1.className = "header";
// document.getElementById("root").appendChild(h1);
// // append() allows you to add multiple items while appendChild() allows only a single item

ReactDOM.render(<h1 className="header">What's up, React!</h1>, document.getElementById("root"));