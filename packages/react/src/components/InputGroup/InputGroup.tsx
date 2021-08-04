import React, { useMemo } from "react";
import { ComponentIds } from "../../utils/component-ids";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { validateChildren } from "../../utils/validate-children";

export type InputGroupProps = HTMLRevindProps<"div">;

const InputGroup = forwardRef<InputGroupProps, "div">(function InputGroup(
    { children, ...props },
    ref,
) {
    const validChildren = useMemo(() => validateChildren(children), [children]);

    return (
        <div {...props} ref={ref}>
            {validChildren.map((child) => {
                /**
                 * for enabling ability to change the theme from within the
                 * parent component
                 */
                const theming = {
                    // size: child.props?.size ?? props.size,
                    // variant: child.props?.variant ?? props.variant,
                    // scheme: child.props?.scheme ?? props.scheme,
                };

                if ((child.type as any)?.id !== ComponentIds.Input) {
                    return React.cloneElement(child, theming);
                }
                return React.cloneElement(child, { ...theming, ...child.props });
            })}
        </div>
    );
});

export default InputGroup;
