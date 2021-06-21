import React from "react";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";

function _Button() {
    const sunIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
            />
        </svg>
    );
    return (
        <Container>
            <Button>A regular button</Button>
            <Button scheme="secondary">A secondary button</Button>
            <Button scheme="red">A red/danger button</Button>
            <Button scheme="yellow">A yellow/warning button</Button>
            <Button scheme="green">A green/success/submit button</Button>
            <Button size="sm">A sm button</Button>
            <Button size="lg">A lg button</Button>
            <Button size="xl">A xl button</Button>
            <Button size="xxl">A xxl button</Button>
            <Button disabled>A disabled button</Button>
            <Button variant="outlined">An outlined button</Button>
            <Button variant="outlined" scheme="secondary">
                A secondary outlined button
            </Button>
            <Button variant="outlined" scheme="red">
                A red outlined button
            </Button>
            <Button variant="outlined" scheme="green">
                A green outlined button
            </Button>
            <Button variant="outlined" scheme="yellow">
                A yellow outlined button
            </Button>
            <Button variant="text">A text button</Button>
            <Button variant="text" scheme="secondary">
                A secondary text button
            </Button>
            <Button variant="text" scheme="red">
                A red text button
            </Button>
            <Button variant="text" scheme="green">
                A green text button
            </Button>
            <Button variant="text" scheme="yellow">
                A yellow text button
            </Button>
            <Button start-icon={sunIcon}>Start Icon</Button>
            <Button end-icon={sunIcon}>End Icon</Button>
            <Button margin={false} full-width>
                Full width (remember to set `margin=false`)
            </Button>
            <br />
        </Container>
    );
}

export default _Button;
