import React from "react";
import TextField from "../../../components/TextField/TextField";
import Container from "../../../components/Container/Container";

function _TextField() {
    return (
        <Container gutters>
            <br />
            <TextField label="Label" />
            <TextField label="Secondary" scheme="secondary" />
            <TextField label="red" scheme="red" />
            <TextField label="Static Label" label-variant="static" />
            <TextField label="Label with Placeholder " placeholder="Email" />
            <TextField
                label="static Label with Placeholder "
                label-variant="static"
                placeholder="Email"
            />
            <br />
            <br />
            <TextField variant="filled" label="Label" />
            <TextField variant="filled" label="Secondary" scheme="secondary" />
            <TextField variant="filled" label="red" scheme="red" />
            <TextField variant="filled" label="Static Label" label-variant="static" />
            <TextField
                variant="filled"
                label="Label with Placeholder "
                placeholder="Email"
            />
            <TextField
                variant="filled"
                label="static Label with Placeholder "
                label-variant="static"
                placeholder="Email"
            />
            <br />
            <br />
            <TextField variant="underlined" label="Label" />
            <TextField variant="underlined" label="Secondary" scheme="secondary" />
            <TextField variant="underlined" label="red" scheme="red" />
            <TextField variant="underlined" label="Static Label" label-variant="static" />
            <TextField
                variant="underlined"
                label="Label with Placeholder "
                placeholder="Email"
            />
            <TextField
                variant="underlined"
                label="static Label with Placeholder "
                label-variant="static"
                placeholder="Email"
            />
            <br />
            <br />
            <TextField label="sm" size="sm" />
            <TextField label="lg" size="lg" />
            <TextField label="xl" size="xl" />
            <br />
            <br />
            <TextField full-width />
            <br />
            <TextField label="password" type="password" />
            <br />
            <TextField label="datetime" type="datetime" />
            <br />
            <TextField label="email" type="email" />
            <br />
            <TextField label="number" type="number" />
            <br />
            <TextField label="url" type="url" />
            <br />
            <TextField label="tel" type="tel" />
        </Container>
    );
}

export default _TextField;
