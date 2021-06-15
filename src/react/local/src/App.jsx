import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import _Button from "./internals/_Button";
import _ButtonGroup from "./internals/_ButtonGroup";
import _Checkbox from "./internals/_Checkbox";
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
    { path: "/checkbox", component: _Checkbox },
];

function App() {
    const [count, setCount] = useState(0);
    const [dark, setDark] = useState(false);
    const moonIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
    );
    const sunIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
    );

    useEffect(() => {
        document.querySelector("html").classList[dark ? "add" : "remove"]("dark");
    }, [dark]);

    return (
        <Router>
            <button onClick={() => setDark(!dark)}>{dark ? sunIcon : moonIcon}</button>
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
