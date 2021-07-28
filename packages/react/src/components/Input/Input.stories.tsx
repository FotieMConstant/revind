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
} as Meta<InputProps>;

const Template = (props: InputProps) => <Input {...props} />;

const defaultArgs = {
    margin: true,
    "full-width": false,
    label: "Input",
    placeholder: "placeholder",
};

export const Default = Template.bind({});

(Default as any).args = defaultArgs as InputProps;

export const MaterialStaticLabelled = Template.bind({});
(MaterialStaticLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "material-static",
    },
} as InputProps;

export const LeftLabelled = Template.bind({});
(LeftLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "left",
    },
} as InputProps;
