import React, { useState } from "react";

import { Meta } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
    title: "Components/Checkbox",
    component: Checkbox,
    argTypes: {
        scheme: {
            options: ["primary", "secondary", "red", "green", "yellow"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg", "xl", "2xl"],
            control: { type: "radio" },
        },
        label: {
            defaultValue: "Checkbox"
        }
    },
} as Meta;

const Template = (props: CheckboxProps) => {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox
            {...props}
            onChange={(e) => setChecked(e.target.checked)}
            checked={checked}
        />
    );
};

export const Default = Template.bind({});

(Default as any).args = {} as CheckboxProps;
