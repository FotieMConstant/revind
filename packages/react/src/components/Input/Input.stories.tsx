import React from "react";

import { Meta } from "@storybook/react";

import { Input, InputProps } from "./Input";

export default {
    title: "Components/Input",
    component: Input,
    argTypes: {
        type: {
            options: [
                "text",
                "email",
                "password",
                "hidden",
                "number",
                "tel",
                "url",
                "datetime",
            ],
            control: { type: "select" },
        },
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
} as Meta;

const Template = (props: InputProps) => <Input {...props} />;

export const Default = Template.bind({});

(Default as any).args = {
    margin: true,
    "full-width": false,
    label: "Input",
} as InputProps;
