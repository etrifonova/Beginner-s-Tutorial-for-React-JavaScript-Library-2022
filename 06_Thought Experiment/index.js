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

// document.getElementById("root").append(catProfile);
// document.getElementById("root").append(JSON.stringify(catProfile));
/*{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"children":"Sima's Best Qualities"},"_owner":null,"_store":{}},{"type":"ul","key":null,"ref":null,"props":{"children":[{"type":"li","key":null,"ref":null,"props":{"children":"Fluffiness"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"Calmness"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"Beauty"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}
 */ 
// // what is displayed: [object Object]
// //JSX returns plain JS objects

ReactDOM.render(catProfile, document.getElementById("root"))