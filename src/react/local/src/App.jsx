import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import _Button from "./internals/_Button";
import _ButtonGroup from "./internals/_ButtonGroup";
import _Container from "./internals/_Container";
import _Flex from "./internals/_Flex";
import _Hidden from "./internals/_Hidden";
import _Text from "./internals/_Text";

const staticRoutes = [
    { path: "/flex", component: _Flex },
    { path: "/container", component: _Container },
    { path: "/hidden", component: _Hidden },
    { path: "/buttons", component: _Button },
    { path: "/button-group", component: _ButtonGroup },
    { path: "/text", component: _Text },
];

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <Route exact path="/">
                <div className="flex justify-center items-center h-screen flex-col">
                    <b>
                        I feel sorry about that you can't even count how many times you
                        clicked a button
                    </b>
                    <p>
                        But anyway you clicked{" "}
                        <code className="text-blue-500">{count}</code> times
                    </p>
                    <button
                        className="bg-blue-500 p-2 rounded text-white"
                        onClick={() => setCount(count + 1)}
                    >
                        Count
                    </button>

                    <section>
                        <h3>Link to all component previews & looks</h3>
                        <ul className="list-disc">
                            {staticRoutes.map(({ path, component }) => (
                                <li key={uuid()}>
                                    <Link to={path}>
                                        {component.name.replace("_", "").toLowerCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </Route>
            {/* Routes for each component testing */}
            {staticRoutes.map(({ path, component: Component }) => (
                <Route key={uuid()} path={path}>
                    <Component />
                </Route>
            ))}
        </Router>
    );
}

export default App;
