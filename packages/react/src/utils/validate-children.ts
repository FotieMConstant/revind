import React from "react";

/**
 * Removes falsy/nullish children from the children array
 */

export function validateChildren(children: React.ReactNode) {
    return React.Children.toArray(children).filter((child) =>
        React.isValidElement(child),
    ) as React.ReactElement[];
}
