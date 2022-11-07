// const h1 = document.createElement("h1");
// h1.textContent = "Peace";
// h1.className = "header";
// console.log(h1);

// const element = <h1 className="header">This is JSX</h1>
// console.log(element); // displays an object
/*
{$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {className: 'header', children: 'This is JSX'}
*/
// JSX - JavaScript XML, a "flavor" of JS in HTML, it's declarative
// with JSX, we need to make sure that we're returning a single parent element; e.g.we can't render h1 and p together because they're sibling elements; we can wrap them in a parent element, e.g. div
// const page = (
//         <div>
//             <h1>Hi there!</h1>
//             <p>How are you doing?</p>
//         </div>)

// console.log(page);

// ReactDOM.render(
//     page,
//     document.getElementById("root")
//     );

// Challenge

const webpage = (
    <nav>
        <h1>Elena Trifonova</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    webpage,
    document.getElementById("root")
)
