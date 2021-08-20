import React from "react";
import { Meta } from "@storybook/react";
import { InputGroupProps, InputGroup } from "./InputGroup";
import { Input } from "../Input/Input";
import { InputAddon } from "../Input/InputAddon";

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
        <InputAddon>Addon</InputAddon>
        <Input placeholder="placeholder" />
    </InputGroup>
);

export const Default = Template.bind({});

const RightAddonTemplate = (props: InputGroupProps) => (
    <InputGroup {...props}>
        <Input placeholder="placeholder" />
        <InputAddon>Right Side Addon</InputAddon>
    </InputGroup>
);

export const RightAddon = RightAddonTemplate.bind({});

const BothSideAddonTemplate = (props: InputGroupProps) => (
    <InputGroup {...props}>
        <InputAddon>Left</InputAddon>
        <Input placeholder="placeholder" />
        <InputAddon>Right</InputAddon>
    </InputGroup>
);

export const BothAddon = BothSideAddonTemplate.bind({});

const ElementTemplate = (props: InputGroupProps) => (
    <InputGroup {...props}>
        <InputAddon left variant="floating">
            &times;
        </InputAddon>
        <Input placeholder="placeholder" />
    </InputGroup>
);

export const LeftElement = ElementTemplate.bind({});
