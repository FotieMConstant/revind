import React, { useContext, useEffect, useState } from "react";
import { ComponentIds } from "../../utils/component-ids";
import { forwardRef, HTMLRevindProps } from "../../utils/forward-ref";
import { useValidateChildren } from "../../hooks/useValidateChildren";
import { InputGroupOptions } from "../../../../types";
import { useStyleConfig } from "../../hooks/useStyleConfig";
import clsx from "clsx";
import { InputAddonProps } from "../Input/InputAddon";

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
        const validChildrenIds = validChildren.map((c) => (c.type as any).id);

        validChildren.forEach((child) => {
            const id = (child.type as any).id;
            if (id === ComponentIds.InputAddon) {
                const direction = child.props.left
                    ? "left"
                    : child.props.right
                    ? "right"
                    : "both";
                const childType =
                    (child.props?.variant as
                        | keyof InputAddonProps["variant"]
                        | undefined) ?? "static";

                // const style = input.logical.placement[direction];

                // const stylePlacementInputVariant =
                //     input.logical.placementInputAddonVariant[childType][direction];

                // classesArr.push(
                //     style ?? "",
                //     stylePlacementInputVariant ?? "",
                //     input.inputAddonVariants[
                //         (child.props?.variant as keyof InputAddonProps["variant"]) ??
                //             "static"
                //     ],
                // );
            }
            if (
                id === ComponentIds.Input &&
                validChildrenIds.includes(ComponentIds.InputAddon) &&
                child.props?.label
            )
                throw new TypeError(
                    "[revind]: Both `InputAddon` & `InputLabel`/`Input.label` can't be used together at once",
                );
        });

        setClasses(clsx(classesArr));
    }, [validChildren]);

    return (
        // <div
        //     className={clsx(
        //         start,
        //         { [margin]: isMargin, [fullWidth]: isFullWidth },
        //         end,
        //         className,
        //     )}
        //     {...props}
        //     ref={ref}
        // >
        <InputGroupProvider value={{ grouped: true }}>
            {validChildren.map((child) => {
                /**
                 * for enabling ability to change the theme from within the
                 * parent component
                 */
                const theming = {
                    size: child.props?.size ?? size,
                    scheme: child.props?.scheme ?? scheme,
                };

                if ((child.type as any)?.id === ComponentIds.InputAddon) {
                    return React.cloneElement(child, {
                        ...theming,
                        inputVariant: variant,
                        ...child.props,
                    });
                }

                return React.cloneElement(child, {
                    ...theming,
                    variant: child.props?.variant ?? variant,
                    "full-width": isFullWidth,
                    className: classes,
                    margin: false,
                    ...child.props,
                });
            })}
        </InputGroupProvider>
        // </div>
    );
});

interface InputContext {
    grouped?: true;
}

const inputGroupContext = React.createContext<InputContext>({});
const InputGroupProvider = inputGroupContext.Provider;

export function useInputGroup() {
    return useContext(inputGroupContext);
}
