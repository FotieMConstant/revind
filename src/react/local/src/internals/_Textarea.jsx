import React from "react";
import Textarea from "../../../components/Textarea/Textarea";

function _Textarea() {
    return (
        <div>
            <br />
            <Textarea label="Label" />
            <Textarea label="Secondary" scheme="secondary" />
            <Textarea label="red" scheme="red" />
            <Textarea label="Static Label" label-variant="static" />
            <Textarea label="Label with Placeholder " placeholder="Email" />
            <Textarea
                label="static Label with Placeholder "
                label-variant="static"
                placeholder="Email"
            />
            <br />
            <br />
            <Textarea variant="filled" label="Label" />
            <Textarea variant="filled" label="Secondary" scheme="secondary" />
            <Textarea variant="filled" label="red" scheme="red" />
            <Textarea variant="filled" label="Static Label" label-variant="static" />
            <Textarea
                variant="filled"
                label="Label with Placeholder "
                placeholder="Email"
            />
            <Textarea
                variant="filled"
                label="static Label with Placeholder "
                label-variant="static"
                placeholder="Email"
            />
            <br />
            <br />
            <Textarea variant="underlined" label="Label" />
            <Textarea variant="underlined" label="Secondary" scheme="secondary" />
            <Textarea variant="underlined" label="red" scheme="red" />
            <Textarea variant="underlined" label="Static Label" label-variant="static" />
            <Textarea
                variant="underlined"
                label="Label with Placeholder "
                placeholder="Email"
            />
            <Textarea
                variant="underlined"
                label="static Label with Placeholder "
                label-variant="static"
                placeholder="Email"
            />
            <br />
            <br />
            <Textarea label="sm" size="sm" />
            <Textarea label="lg" size="lg" />
            <Textarea label="xl" size="xl" />

            <br />
            <Textarea label="min-rows 3" min-rows={3} />
            <Textarea label="max-rows 5" max-rows={5} />
            <Textarea label="max-rows 5 sm" max-rows={5} size="sm" />
            <Textarea label="max-rows 5 lg" max-rows={5} size="lg" />
            <Textarea label="max-rows 5 xl" max-rows={5} size="xl" />
            <Textarea label="rows 5 xl" rows={5} size="xl" />
        </div>
    );
}

export default _Textarea;
