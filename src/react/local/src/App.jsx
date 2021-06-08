import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <b>I feel sorry about that you can't even count how many times you clicked a button</b>
            <p>But anyway you clicked <code className="text-blue-500">{ count }</code> times</p>
            <button className="bg-blue-500 p-2 rounded text-white" onClick={() => setCount(count + 1)}>
        Count
            </button>
        </div>
    );
}

export default App;
