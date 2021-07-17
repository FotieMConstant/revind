import React from "react";

import { Meta } from "@storybook/react";

import { Textarea, TextareaProps } from "./Textarea";

export default {
    title: "Components/Textarea",
    component: Textarea,
} as Meta;

const Template = () => <Textarea />;

export const Default = Template.bind({})
