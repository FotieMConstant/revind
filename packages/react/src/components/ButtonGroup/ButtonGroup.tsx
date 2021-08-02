import { ButtonGroupOptions } from "@revind/types";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { ReactNode } from "react";
import { isFragment } from "react-is";
import { Flex } from "../../components/Flex/Flex";
import { useStyleConfig } from "../../hooks/useStyleConfig";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";

type ReactRevindButtonGroupOptions = ButtonGroupOptions<ReactNode>;

export type ButtonGroupProps = HTMLRevindProps<"div"> & ReactRevindButtonGroupOptions;

export const ButtonGroup = forwardRef<ButtonGroupProps, "div">(function ButtonGroup(
    {
        scheme = "primary",
        size = "md",
        variant = "filled",
        "full-width": fullWidth = false,
        direction = "row",
        styleObj,
        className,
        children,
        ...props
    },
    ref,
) {
    const {
        borderColors,
        directions,
        variantDirections,
        default: { start, end },
    } = useStyleConfig("ButtonGroup", styleObj);
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
    direction: PropTypes.oneOf<ReactRevindButtonGroupOptions["direction"]>([
        "row",
        "column",
    ]),
    size: PropTypes.oneOf<ReactRevindButtonGroupOptions["size"]>([
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
    ]),
    variant: PropTypes.oneOf<ReactRevindButtonGroupOptions["variant"]>([
        "filled",
        "outlined",
        "minimal",
    ]),
    scheme: PropTypes.oneOf<ReactRevindButtonGroupOptions["scheme"]>([
        "primary",
        "secondary",
        "red",
        "green",
        "yellow",
    ]),
};
