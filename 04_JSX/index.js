const h1 = document.createElement("h1");
h1.textContent = "Peace";
h1.className = "header";
console.log(h1);

const element = <h1 className="header">This is JSX</h1>
// 32:30
// JSX - JavaScript XML, a "flavor" of JS in HTML, it's declarative
ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"));

