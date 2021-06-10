import React from "react";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import Button from "../../../components/Button/Button";

function _ButtonGroup() {
    return (
        <div>
            <ButtonGroup>
                <Button>Regular group</Button>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Two</Button>
            </ButtonGroup>
            <ButtonGroup direction="column">
                <Button>Vertical</Button>
                <Button>group</Button>
                <Button>Yeah</Button>
            </ButtonGroup>
            <ButtonGroup size="sm">
                <Button>Small group</Button>
                <Button>One</Button>
                <Button>Two</Button>
            </ButtonGroup>
            <ButtonGroup size="sm" direction="column">
                <Button>Small Vertical</Button>
                <Button>group</Button>
                <Button>Yeah</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
                <Button>Outlined</Button>
                <Button>group</Button>
                <Button>Oh</Button>
            </ButtonGroup>
            <ButtonGroup direction="column" variant="outlined">
                <Button>Vertical</Button>
                <Button>Outlined</Button>
                <Button>group</Button>
            </ButtonGroup>
            <ButtonGroup scheme="secondary" variant="outlined">
                <Button>Outlined</Button>
                <Button>group</Button>
                <Button>Oh</Button>
            </ButtonGroup>
            <ButtonGroup scheme="secondary" direction="column" variant="outlined">
                <Button>Vertical</Button>
                <Button>Outlined</Button>
                <Button>group</Button>
            </ButtonGroup>
            <ButtonGroup variant="text">
                <Button>Text</Button>
                <Button>group</Button>
                <Button>Oh</Button>
            </ButtonGroup>
            <ButtonGroup direction="column" variant="text">
                <Button>Vertical</Button>
                <Button>text</Button>
                <Button>group</Button>
            </ButtonGroup>
            <ButtonGroup scheme="secondary" variant="text">
                <Button>Text</Button>
                <Button>group</Button>
                <Button>Oh</Button>
            </ButtonGroup>
            <ButtonGroup scheme="secondary" direction="column" variant="text">
                <Button>Vertical</Button>
                <Button>text</Button>
                <Button>group</Button>
            </ButtonGroup>
        </div>
    );
}

export default _ButtonGroup;
