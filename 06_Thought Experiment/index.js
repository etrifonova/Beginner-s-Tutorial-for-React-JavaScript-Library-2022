const catProfile = (
    <div>
        <h1>Sima's Best Qualities</h1>
        <ul>
            <li>Fluffiness</li>
            <li>Calmness</li>
            <li>Beauty</li>
        </ul>
    </div>
)

// document.getElementById("root").append(JSON.stringify(catProfile));
// // what is displayed: [object Object]
// //JSX returns plain JS objects

ReactDOM.render(catProfile, document.getElementById("root"))