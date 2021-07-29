import React from "react";

import { Meta } from "@storybook/react";

import { Textarea, TextareaProps } from "./Textarea";

export default {
    title: "Components/Textarea",
    component: Textarea,
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
} as Meta;

const Template = (props: TextareaProps) => <Textarea {...props} />;

const defaultArgs = {
    margin: true,
    "full-width": false,
    label: "Textarea",
    placeholder: "placeholder",
    required: true,
};

export const Default = Template.bind({});

(Default as any).args = defaultArgs as TextareaProps;

export const MaterialStaticLabelled = Template.bind({});
(MaterialStaticLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "material-static",
    },
} as TextareaProps;

export const LeftLabelled = Template.bind({});
(LeftLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "left",
    },
} as TextareaProps;

export const TopLabelled = Template.bind({});
(TopLabelled as any).args = {
    ...defaultArgs,
    "label-props": {
        variant: "top",
    },
} as TextareaProps;
