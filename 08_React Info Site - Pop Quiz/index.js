const facts = (
    <div>
        
        <img src="./react-logo.png" alt="React Logo" width="48px"></img>
        <h1>Fun Facts About React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousdans of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

// the content above needs to put in a div because we can't put two or more siblings elements in the variable
// saving all of the jsx above in a single variable is not common nor convenient. Later on we'll be creating custom components instead.

ReactDOM.render(facts, document.getElementById('root'))