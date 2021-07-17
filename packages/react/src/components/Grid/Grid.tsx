import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { Flex, FlexProps, flexProps } from "../Flex/Flex";

type RowColumnKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridProps extends FlexProps {
    spacing?: { x: RowColumnKey; y: RowColumnKey };
}

export function Grid({
    spacing = { x: 1, y: 1 },
    children,
    className,
    ...props
}: GridProps): ReactElement {
    const rowSpacing = {
        0: "",
        1: "space-y-1",
        2: "space-y-2",
        3: "space-y-3",
        4: "space-y-4",
        5: "space-y-5",
        6: "space-y-6",
        7: "space-y-7",
        8: "space-y-8",
        9: "space-y-9",
        10: "space-y-10",
        11: "space-y-11",
        12: "space-y-12",
    };
    const colSpacing = {
        0: "",
        1: "space-x-1",
        2: "space-x-2",
        3: "space-x-3",
        4: "space-x-4",
        5: "space-x-5",
        6: "space-x-6",
        7: "space-x-7",
        8: "space-x-8",
        9: "space-x-9",
        10: "space-x-10",
        11: "space-x-11",
        12: "space-x-12",
    };
    const { x: spacingX, y: spacingY } = spacing;

    return (
        <Flex
            className={`${rowSpacing[spacingY]} ${colSpacing[spacingX]} ${className}`}
            {...props}
            ref={undefined}
        >
            {children}
        </Flex>
    );
}

Grid.propTypes = {
    ...flexProps,

    component: PropTypes.elementType,

    container: PropTypes.bool,

    item: PropTypes.bool,

    lg: PropTypes.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    md: PropTypes.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    sm: PropTypes.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    spacing: PropTypes.shape({
        x: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        y: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    }),

    xl: PropTypes.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    xs: PropTypes.oneOf([false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

    zeroMinWidth: PropTypes.bool,
};
