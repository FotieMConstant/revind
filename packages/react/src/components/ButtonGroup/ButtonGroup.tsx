import clsx from "clsx";
import PropTypes from "prop-types";
import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { isFragment } from "react-is";
import { Flex } from "../../components/Flex/Flex";
import { useTheme } from "../../hooks/useTheme";

export interface ButtonGroupProps extends ComponentPropsWithoutRef<"div"> {
    direction?: "column" | "row";
    variant?: "filled" | "outlined" | "text";
    scheme?: "primary" | "secondary" | "red" | "green" | "yellow";
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
    "full-width"?: boolean;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
    function ButtonGroup(
        {
            scheme = "primary",
            size = "md",
            variant = "filled",
            "full-width": fullWidth = false,
            direction = "row",
            className,
            children,
            ...props
        },
        ref,
    ) {
        const {
            styleObjects: {
                ButtonGroup: {
                    borderColors,
                    directions,
                    variantDirections,
                    defaultEnd,
                    defaultStart,
                },
            },
        } = useTheme();
        return (
            <Flex
                ref={ref as any}
                role="group"
                inline={!fullWidth}
                alignItems="stretch"
                className={className}
                direction={direction}
                {...props}
            >
                {React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) {
                        return null;
                    }

                    if (process.env.NODE_ENV !== "production") {
                        if (isFragment(child)) {
                            throw new TypeError(
                                "[revind]: Fragments can't be use. Pass an array instead",
                            );
                        }
                    }
                    return React.cloneElement(child, {
                        className: clsx(
                            defaultStart,
                            directions[direction],
                            variantDirections[variant][direction],
                            borderColors[scheme],
                            defaultEnd,
                        ),
                        scheme,
                        size,
                        variant,
                        rounded: false,
                        margin: false,
                    });
                })}
            </Flex>
        );
    },
);

ButtonGroup.propTypes = {
    "full-width": PropTypes.bool,
    direction: PropTypes.oneOf(["row", "column"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
    variant: PropTypes.oneOf(["filled", "outlined", "text"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
};
