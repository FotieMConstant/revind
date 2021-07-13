import { ButtonGroupOptions } from "@revind/types";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { ReactNode } from "react";
import { isFragment } from "react-is";
import { Flex } from "../../components/Flex/Flex";
import { useTheme } from "../../hooks/useTheme";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";

export type ButtonGroupProps = HTMLRevindProps<"div"> & ButtonGroupOptions<ReactNode>;

export const ButtonGroup = forwardRef<ButtonGroupProps, "div">(function ButtonGroup(
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
                default: { start, end },
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
                        start,
                        directions[direction],
                        variantDirections[variant]?.[direction],
                        borderColors?.[scheme],
                        end,
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
});

ButtonGroup.propTypes = {
    "full-width": PropTypes.bool,
    direction: PropTypes.oneOf(["row", "column"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
    variant: PropTypes.oneOf(["filled", "outlined", "minimal"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
};
