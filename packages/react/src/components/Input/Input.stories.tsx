import React from "react";

import { Meta } from "@storybook/react";

import { Input, InputProps } from "./Input";
import { InputAddon } from "./InputAddon";

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
    required: true,
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

export const TopLabelled = Template.bind({});
(TopLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "top",
    },
} as InputProps;

export const WithoutLabel = Template.bind({});

(TopLabelled as any).args = {
    ...defaultArgs,
    label: undefined,
};

export const WithAddon = Template.bind({});

(WithAddon as any).args = {
    ...defaultArgs,
    "left-addons": <InputAddon variant="static">Email</InputAddon>,
} as InputProps;

export const WithRightAddon = Template.bind({});

(WithRightAddon as any).args = {
    ...defaultArgs,
    "right-addons": <InputAddon variant="static">Add</InputAddon>,
} as InputProps;

export const WithBothAddon = Template.bind({});

(WithBothAddon as any).args = {
    ...defaultArgs,
    "left-addons": <InputAddon variant="static">Email</InputAddon>,
    "right-addons": <InputAddon variant="static">Add</InputAddon>,
} as InputProps;
