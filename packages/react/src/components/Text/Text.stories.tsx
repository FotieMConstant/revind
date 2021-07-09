import React from "react";

import { Meta } from "@storybook/react";

import { Text, TextProps } from "./Text";

export default {
    title: "Components/Text",
    component: Text,
    argTypes: {
        variant: {
            control: { type: "select" },
            options: [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "body1",
                "body2",
                "sub1",
                "sub2",
                "caption",
                "overline",
            ],
        },
        align: {
            control: { type: "radio" },
            options: ["left", "center", "right", "justify"],
        },
        scheme: {
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "red",
                "green",
                "yellow",
                "regular",
                "inverted",
            ],
        },
    },
} as Meta;

const Template = (props: TextProps) => (
    <Text {...props}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus aliquam dolorum
        vitae laboriosam voluptates blanditiis impedit magnam ut, quod quae tempora veniam
        quas doloribus dolorem quam labore, odio repellat aperiam iste nam soluta ipsum
        voluptate. Eum odio sint placeat quae? Placeat aliquid nesciunt fugit accusamus
        tempore aspernatur, ad omnis distinctio
    </Text>
);

export const Default = Template.bind({});

(Default as any).args = {
    inline: false,
    wrap: true,
    "bottom-margin": false,
} as TextProps;
