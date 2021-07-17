/**
 * tweaked forwardRef for supporting `as` prop
 *
 * All credit goes to chakra-ui, Reach UI, Reakit, fluentui for base types
 * & forwardRef function
 */

import React from "react";

export type OmitCommonProps<Target, OmitAdditionalProps extends keyof any = never> = Omit<
    Target,
    "transition" | "as" | "color" | OmitAdditionalProps
>;

export type RightJoinProps<
    SourceProps extends object = {},
    OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type As<Props = any> = React.ElementType<Props>;
export type MergeWithAs<
    ComponentProps extends object,
    AsProps extends object,
    AdditionalProps extends object = {},
    AsComponent extends As = As,
> = RightJoinProps<ComponentProps, AdditionalProps> &
    RightJoinProps<AsProps, AdditionalProps> & {
        as?: AsComponent;
    };
export type ComponentWithAs<Component extends As, Props extends object = {}> = {
    <AsComponent extends As>(
        props: MergeWithAs<
            React.ComponentProps<Component>,
            React.ComponentProps<AsComponent>,
            Props,
            AsComponent
        >,
    ): JSX.Element;

    displayName?: string;
    propTypes?: React.WeakValidationMap<any>;
    contextTypes?: React.ValidationMap<any>;
    defaultProps?: Partial<any>;
    id?: string;
};

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
    as?: As;
};

export function forwardRef<Props extends object, Component extends As>(
    component: React.ForwardRefRenderFunction<
        any,
        RightJoinProps<PropsOf<Component>, Props> & {
            as?: As;
        }
    >,
) {
    return React.forwardRef(component) as unknown as ComponentWithAs<Component, Props>;
}

export type HTMLRevindProps<T extends As> = Omit<
    PropsOf<T>,
    T extends "svg" ? "ref" | "children" : "ref"
> & { as?: As };
