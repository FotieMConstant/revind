import React, { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TextField from "../TextField/TextField";

const Textarea = forwardRef(function Textarea(
    { "min-rows": minRows, "max-rows": maxRows, onInput, rows, ...props },
    ref,
) {
    const [defaultHeight, setDefaultHeight] = useState();
    const inputRef = ref ?? useRef();

    function handleInput(e) {
        const { target: el } = e;
        onInput && onInput(e);
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

    if (maxRows && props.rows) {
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
    }, []);

    return (
        <>
            <TextField
                ref={inputRef}
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
    "wrapper-ref": PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    "label-ref": PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    "label-variant": PropTypes.oneOf(["static", "floating"]),
};

export default Textarea;
