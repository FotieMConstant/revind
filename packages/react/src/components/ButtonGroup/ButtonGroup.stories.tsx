import React from "react";

import { Meta } from "@storybook/react";

import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { Button } from "../Button/Button";

export default {
    title: "Components/ButtonGroup",
    component: ButtonGroup,
    argTypes: {
        direction: { control: { type: "radio" }, options: ["row", "column"] },
        size: { control: { type: "radio" }, options: ["sm", "md", "lg", "xl", "2xl"] },
        variant: { control: { type: "select" }, options: ["filled", "outlined", "minimal"] },
        scheme: {
            control: { type: "select" },
            options: ["primary", "secondary", "red", "green", "yellow"],
        },
    },
} as Meta;

const Template = (props: ButtonGroupProps) => (
    <ButtonGroup {...props}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
    </ButtonGroup>
);

export const Default = Template.bind({});

(Default as any).args = {
    "full-width": false,
} as ButtonGroupProps;
