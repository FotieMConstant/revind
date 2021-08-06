import React from "react";
import { Meta } from "@storybook/react";
import { InputGroupProps, InputGroup } from "./InputGroup";
import { Input } from "../Input/Input";
import { InputAddon } from "../InputAddon/InputAddon";

export default {
    title: "Components/InputGroup",
    component: InputGroup,
    subcomponents: { Input, InputAddon },
    args: {
        margin: false,
        "full-width": false,
    },
    argTypes: {
        variant: {
            options: ["filled", "outlined", "minimal"],
            control: { type: "radio" },
        },
        scheme: {
            options: ["primary", "secondary", "red", "green", "yellow"],
            control: { type: "select" },
        },
        size: { options: ["sm", "md", "lg", "xl"], control: { type: "radio" } },
    },
} as Meta<InputGroupProps>;

const Template = (props: InputGroupProps) => (
    <InputGroup {...props}>
        <InputAddon left>Addon</InputAddon>
        <Input label="Input" placeholder="placeholder" />
    </InputGroup>
);

export const Default = Template.bind({});

const RightAddonTemplate = (props: InputGroupProps) => (
    <InputGroup {...props}>
        <Input label="Input" placeholder="placeholder" />
        <InputAddon right>Right Side Addon</InputAddon>
    </InputGroup>
);

export const RightAddon = RightAddonTemplate.bind({});

const BothSideAddonTemplate = (props: InputGroupProps) => (
    <InputGroup {...props}>
        <InputAddon left>Left</InputAddon>
        <Input label="Input" placeholder="placeholder" />
        <InputAddon right>Right</InputAddon>
    </InputGroup>
);

export const BothAddon = BothSideAddonTemplate.bind({});
