import React, { useEffect, useState } from "react";
import { ComponentIds } from "../../utils/component-ids";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { useValidateChildren } from "../../hooks/useValidateChildren";
import { InputGroupOptions } from "../../../../types";
import { useStyleConfig } from "../../hooks/useStyleConfig";
import clsx from "clsx";

export type InputGroupProps = HTMLRevindProps<"div"> & InputGroupOptions;

export const InputGroup = forwardRef<InputGroupProps, "div">(function InputGroup(
    {
        variant = "outlined",
        scheme = "primary",
        className,
        size = "md",
        margin: isMargin = true,
        "full-width": isFullWidth = false,
        styleObj,
        children,
        ...props
    },
    ref,
) {
    const {
        default: { start, end },
        conditionals: { margin, "full-width": fullWidth },
        sub: { input },
    } = useStyleConfig("InputGroup", styleObj);
    const validChildren = useValidateChildren(children);

    const [classes, setClasses] = useState("");

    useEffect(() => {
        const classesArr: string[] = [];

        validChildren.forEach((child) => {
            const id = (child.type as any).id;
            if (id === ComponentIds.InputAddon || id === ComponentIds.InputElement) {
                const childType = id === ComponentIds.InputAddon ? "addon" : "element";
                const direction = child.props.left
                    ? "left"
                    : child.props.right
                    ? "right"
                    : "both";
                const style = input.logical.placement[childType][direction];

                style && classesArr.push(style);
            }
        });

        setClasses(clsx(classesArr));
    }, [validChildren]);

    return (
        <div
            className={clsx(
                start,
                { [margin]: isMargin, [fullWidth]: isFullWidth },
                end,
                className,
            )}
            {...props}
            ref={ref}
        >
            {validChildren.map((child) => {
                /**
                 * for enabling ability to change the theme from within the
                 * parent component
                 */
                const theming = {
                    size: child.props?.size ?? size,
                    variant: child.props?.variant ?? variant,
                    scheme: child.props?.scheme ?? scheme,
                };

                if ((child.type as any)?.id !== ComponentIds.Input) {
                    return React.cloneElement(child, theming);
                }

                return React.cloneElement(child, {
                    ...theming,
                    "full-width": isFullWidth,
                    className: classes,
                    margin: false,
                    ...child.props,
                });
            })}
        </div>
    );
});
