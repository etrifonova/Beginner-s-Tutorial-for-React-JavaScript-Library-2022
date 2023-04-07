1. Why do we need to `import React from "react" in our files?
Because the JSX syntax is defined in React, and to be able to use it, we need to import React.

2. If I were to console.log(page) in index.js, what would show up?
a JS object. REact elements that describe what React should eventually add to the real DOM for us.

e.g.

{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"children":"Sima's Best Qualities"},"_owner":null,"_store":{}},{"type":"ul","key":null,"ref":null,"props":{"children":[{"type":"li","key":null,"ref":null,"props":{"children":"Fluffiness"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"Calmness"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"Beauty"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}

3. What's wrong with this code"
```
const page = (
    <h1><Hello</h1>
    <p>This is my website!</p>
)
```
We need our JSX to be nested under a single parent element.

4. What does it mean for something to be "declarative" instead of "imperative"?
Declarative means that I can tell the computer what I what without details. Imperative would mean to specify all the steps.


5. What does it mean for sth to be "composable"?
We have small pieces that we can put together to create a unity


Quiz at 1:11:00

1. What is a React component?
A function that returns React elements. (UI)

2. What's wrong with this code?
```
function myComponent() {
  return (
    <small>I'm tine text!</small>
  )
}
```
myComponent() must be in Pascal Case

3. What's wrong with this code?
```
function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" alt="React Logo" width="48">
      </nav>
    </header>
  )
}

ReactDOM.render(Header(), document.getElementById('root'));
```
The function must be called using < />:
ReactDOM.render(<NewPage />, document.getElementById('root'));
