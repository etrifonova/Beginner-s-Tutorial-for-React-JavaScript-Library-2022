import Header from "./Header.js";
import MainComponent from "./MainComponent.js";
import Footer from "./Footer.js"

// 1:29:00
// function MainComponent() {
//   return (
//     <div className="main-container">
//       <h1>Reasons to learn React</h1>
//         <ol>
//           <li>It facilitates website building</li>
//           <li>It's a hirable skill</li>
//           <li>It's awesome</li>
//         </ol>
//     </div>
//   )
// }

// function Footer() {
//   return (
//     <footer className="page-footer">
//       <p>&copy; 2023 eTrifonova Development. All rights reserved.</p>
//     </footer>
//   )
// }

// <Header />

function NewPage() {
    return (
        <div className="body">
          <Header />
          <MainComponent />
          <Footer />
        </div>
  )
}

ReactDOM.render(<NewPage />, document.getElementById('root'));

