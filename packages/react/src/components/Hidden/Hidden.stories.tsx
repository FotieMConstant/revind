import React from "react";

import { Meta } from "@storybook/react";

import { Hidden, HiddenProps } from "./Hidden";

export default {
    title: "Components/Hidden",
    component: Hidden,
} as Meta;

const Template = (props: HiddenProps) => (
    <Hidden {...props}>
        <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti dolorum
            unde corporis repellat veritatis earum nemo nostrum quod officiis debitis
            minus at, cum ullam et placeat esse dignissimos! Mollitia minus itaque sunt
            sint nisi, odit possimus enim? Laboriosam deleniti distinctio eveniet illum
            rerum dolor nulla quibusdam obcaecati temporibus non, quaerat nam, nisi saepe
            architecto rem ratione officia adipisci assumenda nesciunt neque ad esse? Unde
            officia voluptate tenetur corporis quia? Sunt sit dolorem quam dolores
            blanditiis doloribus natus earum dolor voluptate consectetur, nam asperiores
            tenetur reprehenderit est veritatis pariatur nobis, molestias alias et itaque
            id, assumenda numquam. Magni pariatur error explicabo.
        </div>
    </Hidden>
);

export const Default = Template.bind({});

(Default as any).args = {
    all: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
    hover: false,
    active: false,
    focus: false,
} as HiddenProps;
