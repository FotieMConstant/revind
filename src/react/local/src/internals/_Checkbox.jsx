import React, { useState } from "react";
import Checkbox from "../../../components/Checkbox/Checkbox";

function _Checkbox() {
    const [checked, setChecked] = useState(false);
    const [state, setState] = useState("initial non focus");
    return (
        <div>
            The state of check box 1 {state}
            <br />
            <Checkbox
                checked={checked}
                onBlur={() => setState("Blur")}
                onFocus={() => setState("Focus")}
                onChange={(e) => setChecked(e.target.checked)}
                label="regular"
            ></Checkbox>
            <Checkbox
                checked={checked}
                size="sm"
                onBlur={() => setState("Blur")}
                onFocus={() => setState("Focus")}
                onChange={(e) => setChecked(e.target.checked)}
                label="sm"
            ></Checkbox>
            <Checkbox
                checked={checked}
                scheme="secondary"
                label="Secondary"
                onChange={(e) => setChecked(e.target.checked)}
            ></Checkbox>
            <Checkbox
                checked={checked}
                scheme="red"
                size="lg"
                label="lg & red"
                onChange={(e) => setChecked(e.target.checked)}
            ></Checkbox>
            <Checkbox
                checked={checked}
                scheme="green"
                size="xl"
                label="xl & green"
                onChange={(e) => setChecked(e.target.checked)}
            ></Checkbox>
            <Checkbox
                checked={checked}
                scheme="yellow"
                size="xxl"
                label="xxl & yellow"
                onChange={(e) => setChecked(e.target.checked)}
            ></Checkbox>
        </div>
    );
}

export default _Checkbox;
