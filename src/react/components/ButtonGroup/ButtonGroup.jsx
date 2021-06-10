import React from "react";
import PropTypes from "prop-types";
import { isFragment } from "react-is";
import Flex from "../../components/Flex/Flex";

function ButtonGroup({
    scheme = "primary",
    size = "md",
    variant = "filled",
    "full-width": fullWidth = false,
    direction = "row",
    className,
    children,
    ...props
}) {
    const variants = {
        filled: {
            row: "mx-[0.5px] first:ml-0 last:mr-0",
            column: "my-[0.5px] first:mt-0 last:mb-0",
        },
        outlined: {
            row: "first:border-r-0 last:border-l-0",
            column: "first:border-b-0 last:border-t-0",
        },
        text: {
            row: "border-l border-r first:border-none last:border-none",
            column: "border-t border-b first:border-none last:border-none",
        },
    };

    const borderColors = {
        primary: "border-primary dark:border-primary-dark",
        secondary: "border-secondary dark:border-secondary-dark",
        red: "border-red-600 dark:border-red-500",
        green: "border-green-600 dark:border-green-500",
        yellow: "border-yellow-400 dark:border-yellow-300",
    };

    const directions = {
        row: "first:rounded-l last:rounded-r",
        column: "first:rounded-t last:rounded-b",
    };

    return (
        <Flex
            role="group"
            inline={!fullWidth}
            alignItems="stretch"
            className={`${className}`}
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
                    className: `${directions[direction]} rounded-none ${variants[variant][direction]} ${borderColors[scheme]} `,
                    scheme,
                    size,
                    variant,
                    margin: false,
                });
            })}
        </Flex>
    );
}

ButtonGroup.propTypes = {
    ...ButtonGroup.propTypes,
    "full-width": PropTypes.bool,
    direction: PropTypes.oneOf(["row", "column"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
    variant: PropTypes.oneOf(["filled", "outlined", "text"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
};

export default ButtonGroup;
