import React from "react";

import { Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["filled", "outlined", "text"],
            control: { type: "radio" },
        },
    },
} as Meta;

const Template = (props: ButtonProps) => (
    <Button {...props} ref={undefined}>
        Button
    </Button>
);

export const Default = Template.bind({});
