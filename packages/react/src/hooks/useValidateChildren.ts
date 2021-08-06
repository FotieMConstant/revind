import React, { useMemo } from "react";

/**
 * Removes falsy/nullish children from the children array
 */

export function useValidateChildren(children: React.ReactNode) {
    return useMemo(
        () =>
            React.Children.toArray(children).filter((child) =>
                React.isValidElement(child),
            ) as React.ReactElement[],
        [children],
    );
}
