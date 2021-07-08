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
        scheme: {
            options: ["primary", "secondary", "red", "green", "yellow"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl", "xxl"],
            control: { type: "radio" },
        },
    },
} as Meta;

const icon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
    </svg>
);

const Template = ({
    "start-icon": startIcon,
    "end-icon": endIcon,
    ...props
}: ButtonProps) => (
    <Button start-icon={startIcon && icon} end-icon={endIcon && icon} {...props}>
        Button
    </Button>
);

export const Default = Template.bind({});
(Default as any).args = {
    variant: "filled",
    scheme: "primary",
    size: "md",
    margin: false,
    "full-width": false,
    "start-icon": false,
    "end-icon": false,
} as ButtonProps;
