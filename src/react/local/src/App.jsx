import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import _Flex from "./internals/_Flex";
import _Hidden from "./internals/_Hidden";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <Route exact path="/">
                <div className="flex justify-center items-center h-screen flex-col">
                    <b>I feel sorry about that you can't even count how many times you clicked a button</b>
                    <p>But anyway you clicked <code className="text-blue-500">{ count }</code> times</p>
                    <button
                        className="bg-blue-500 p-2 rounded text-white"
                        onClick={() => setCount(count + 1)}>
                  Count
                    </button>
            
                    <section>
                        <h3>Link to all component previews & looks</h3>
                        <ul className="list-disc">
                            <li><Link to="/flex">flex</Link></li>
                        </ul>
                        <ul className="list-disc">
                            <li><Link to="/hidden">hidden</Link></li>
                        </ul>
                    </section>
                </div>
                
            </Route>
            {/* Routes for each component testing */}
            <Route path="/flex"><_Flex/></Route>
            <Route path="/hidden"><_Hidden/></Route>

        </Router>
    );
}

export default App;
