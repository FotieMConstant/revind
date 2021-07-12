import React from "react";

import { Meta } from "@storybook/react";

import { Container, ContainerProps } from "./Container";

export default {
    title: "Components/Container",
    component: Container,
    argTypes: {
        scheme: { control: { type: "radio" }, options: ["primary", "secondary"] },
        variant: {
            control: { type: "radio" },
            options: ["elevated", "regular", "bordered"],
        },
        "max-width": {
            control: { type: "radio" },
            options: ["sm", "md", "lg", "xl", false],
        },
        elevation: {
            control: { type: "radio" },
            options: ["xs", "sm", "md", "lg", "xl", "2xl"],
        },
        border: { control: { type: "radio" }, options: ["sm", "md", "lg", "xl"] },
    },
} as Meta;

const content = (
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam reiciendis,
        voluptates reprehenderit facilis fugit molestias quibusdam, possimus libero quidem
        distinctio similique harum, delectus obcaecati omnis ullam. Veritatis et iure
        libero error cum enim voluptate corporis tempora suscipit ipsa, similique autem
        necessitatibus illum assumenda deleniti rem, itaque sit soluta! Quos, culpa.
        Cupiditate aut quis ducimus ea maiores tempora totam labore consequuntur ullam
        quaerat minus culpa provident, nostrum perferendis vero dolore quasi alias, est,
        eveniet accusantium. Possimus reprehenderit deleniti voluptatum modi, libero
        magnam officiis vitae nam ex perspiciatis aliquam ipsam laborum assumenda
        molestiae in aut! Odit accusamus fugit deleniti consectetur excepturi?
    </div>
);

const Template = (props: ContainerProps) => <Container {...props}>{content}</Container>;

export const Default = Template.bind({});

(Default as any).args = {
    fixed: false,
    gutters: false,
    center: false,
    rounded: false,
} as ContainerProps;
