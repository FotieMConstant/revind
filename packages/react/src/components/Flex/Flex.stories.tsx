import React from "react";

import { Meta } from "@storybook/react";

import { Flex, FlexProps } from "./Flex";

export default {
    title: "Components/Flex",
    component: Flex,
    argTypes: {
        direction: {
            options: ["column", "row", "row-reverse", "column-reverse"],
            control: { type: "radio" },
        },
        wrap: {
            control: { type: "radio" },
            options: ["wrap", "no-wrap", "wrap-reverse"],
        },

        justifyContent: {
            control: { type: "radio" },
            options: ["center", "start", "end", "between", "around", "evenly"],
        },

        alignContent: {
            control: { type: "radio" },
            options: ["center", "start", "end", "between", "around", "evenly"],
        },

        alignItems: {
            control: { type: "radio" },
            options: ["center", "start", "end", "stretch", "baseline"],
        },
    },
} as Meta;

const content = (
    <div className="border border-solid border-black max-w-[100px]">
        {"Lorem x shakalaka boom".repeat(10)}
    </div>
);

const Template = (props: FlexProps) => (
    <Flex {...props}>
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
    </Flex>
);

export const Default = Template.bind({});

(Default as any).args = {
    inline: false,
} as FlexProps;
