import React, {
    DetailedHTMLProps,
    FormEvent,
    forwardRef,
    TextareaHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import PropTypes from "prop-types";
import { TextField, TextFieldProps } from "../TextField/TextField";

export interface TextareaProps
    extends DetailedHTMLProps<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
        >,
        Pick<
            TextFieldProps,
            | "variant"
            | "scheme"
            | "size"
            | "margin"
            | "full-width"
            | "label"
            | "label-variant"
            | "wrapper-ref"
            | "label-ref"
        > {
    "min-rows"?: number;
    "max-rows"?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
    { "min-rows": minRows, "max-rows": maxRows, onInput, rows, ...props },
    ref,
) {
    const [defaultHeight, setDefaultHeight] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    function handleInput(e: FormEvent<HTMLTextAreaElement>) {
        const { target } = e;
        onInput && onInput(e);
        const el = target as HTMLTextAreaElement;
        el.style.height = minRows ? `${(minRows - 1) * defaultHeight}px` : "auto";
        let height = el.scrollHeight;
        const offset = getOffset();
        if (maxRows && height > maxRows * (defaultHeight - offset) + offset) {
            el.style.overflow = "auto";
        } else {
            el.style.overflow = "hidden";
        }
        el.style.height = `${height}px`;
    }

    if (maxRows && rows) {
        console.error(
            "[revind]: Using both resizable & fixed properties isn't valid. Use either `max-rows` for auto-resize or `rows` for static",
        );
    }

    const getOffset = useCallback(function getOffset() {
        switch (props.size) {
            case "sm":
                return 12;
            case "lg":
                return 32;
            case "xl":
                return 48;
            default:
                return 16;
        }
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            const height = inputRef.current.scrollHeight;
            setDefaultHeight(height);
            if (minRows && !rows) {
                inputRef.current.style.height = `${(minRows - 1) * height}px`;
            }
            if (maxRows) {
                const offset = getOffset();
                inputRef.current.style.maxHeight = `${
                    maxRows * (height - offset) + offset
                }px`;
            }
        }
    }, []);

    return (
        <>
            <TextField
                ref={inputRef as any}
                onInput={rows ? onInput : handleInput}
                component="textarea"
                rows={rows ?? 1}
                {...props}
            />
        </>
    );
});

Textarea.propTypes = {
    ...Textarea.propTypes,
    "min-rows": PropTypes.number,
    "max-rows": PropTypes.number,
    variant: PropTypes.oneOf(["filled", "regular", "underlined"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
    margin: PropTypes.bool,
    "full-width": PropTypes.bool,
    label: PropTypes.string,
    "wrapper-ref": PropTypes.oneOfType<any>([PropTypes.func, PropTypes.object]),
    "label-ref": PropTypes.oneOfType<any>([PropTypes.func, PropTypes.object]),
    "label-variant": PropTypes.oneOf(["static", "floating"]),
};
