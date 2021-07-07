import PropTypes from "prop-types";
import React, {
    ChangeEvent,
    FocusEvent,
    ElementType,
    forwardRef,
    HTMLProps,
    ReactHTML,
    Ref,
    useState,
} from "react";

export interface TextFieldProps
    extends Omit<HTMLProps<HTMLInputElement>, "size" | "type">,
        Record<string, any> {
    type?:
        | "text"
        | "email"
        | "password"
        | "hidden"
        | "number"
        | "tel"
        | "url"
        | "datetime";
    variant?: "filled" | "regular" | "underlined";
    scheme?: "primary" | "secondary" | "red" | "green" | "yellow";
    size?: "sm" | "md" | "lg" | "xl";
    margin?: boolean;
    "full-width"?: boolean;
    label?: string;
    "label-variant"?: "static" | "floating";
    "wrapper-ref"?: Ref<HTMLLabelElement>;
    "label-ref"?: Ref<HTMLSpanElement>;
    component?: ElementType | keyof ReactHTML;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
    {
        variant = "regular",
        scheme = "primary",
        size = "md",
        margin = true,
        "full-width": fullWidth = false,
        label,
        "label-ref": labelRef,
        "wrapper-ref": wrapperRef,
        "label-variant": labelVariant = "floating",
        type = "text",
        className = "",
        onFocus,
        onChange,
        onBlur,
        component: Component = "input",
        ...props
    },
    ref,
) {
    const [inputFocused, setInputFocused] = useState(false);
    const [containsText, setContainsText] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    function handleInputFocus(e: FocusEvent<HTMLInputElement>) {
        setInputFocused(true);
        onFocus && onFocus(e);
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>) {
        setInputFocused(false);
        onBlur && onBlur(e);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        onChange && onChange(e);
        setContainsText(!!e.target.value);
    }
    const inputSchemes = {
        primary: "focus:border-primary dark:focus:border-primary-dark",
        secondary: "focus:border-secondary dark:focus:border-secondary-dark",
        red: "focus:border-red dark:focus:border-red-dark",
        green: "focus:border-green dark:focus:border-green-dark",
        yellow: "focus:border-yellow dark:focus:border-yellow-dark",
    };

    const variants = {
        regular: "border border-solid rounded bg-inherit",
        filled: "border-0 bg-gray-100 dark:bg-gray-800",
        underlined: "border-b border-solid bg-inherit",
    };

    const spanVariants = {
        regular: {
            focused:
                "-top-2 text-xs bg-container-primary dark:bg-container-primary-dark left-2",
            default: "left-2 top-1/2 -translate-y-1/2 text-gray-500",
        },
        filled: {
            focused: "-top-2 text-xs left-2",
            default: "left-2 top-1/2 -translate-y-1/2 text-gray-500",
        },
        underlined: {
            focused: "-top-2 text-xs",
            default: "top-1/2 -translate-y-1/2 text-gray-500",
        },
    };

    const textSchemes = {
        primary: "focus-within:text-primary",
        secondary: "focus-within:text-secondary",
        red: "focus-within:text-red",
        green: "focus-within:text-green",
        yellow: "focus-within:text-yellow",
    };

    const sizes = {
        sm: "p-1",
        md: "py-2 px-1 text-md",
        lg: "py-4 px-1 text-xl",
        xl: "py-6 px-1 text-2xl",
    };

    const spanKey =
        inputFocused || labelVariant !== "floating" || containsText
            ? "focused"
            : "default";

    return (
        <label
            className={`${
                fullWidth ? "flex" : "inline-block"
            } transition-colors relative text-gray-500 ${textSchemes[scheme]} ${
                margin ? "mx-1 mb-2" : ""
            }`}
            ref={wrapperRef}
        >
            {label && (
                <span
                    className={`overflow-ellipsis whitespace-nowrap appearance-none transition-all transform select-none absolute ${
                        spanVariants[variant][spanKey]
                    } ${
                        labelVariant === "static" && !inputFocused ? "text-gray-500" : ""
                    }`}
                    ref={labelRef}
                >
                    {label}
                </span>
            )}

            <Component
                className={`${
                    fullWidth ? "w-full" : ""
                } dark:border-gray-600 outline-none text-black dark:text-white  placeholder-gray-500 border-gray-300 ${
                    sizes[size]
                } ${inputSchemes[scheme]} ${variants[variant]} ${
                    labelVariant === "floating"
                        ? "placeholder-opacity-0 focus:placeholder-opacity-100"
                        : ""
                } ${className}`}
                {...props}
                onFocus={handleInputFocus}
                onBlur={handleBlur}
                ref={ref}
                onChange={handleChange}
                type={!showPassword ? type : "text"}
            />
            {type === "password" && containsText && (
                <ShowHidePasswordButton
                    toggle={() => setShowPassword(!showPassword)}
                    active={showPassword}
                />
            )}
        </label>
    );
});

interface ShowHidePasswordButtonProps {
    toggle: VoidFunction;
    active: boolean;
}

function ShowHidePasswordButton({ toggle, active }: ShowHidePasswordButtonProps) {
    const eyeIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
        </svg>
    );

    const eyeOffIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
        </svg>
    );
    return (
        <button
            className="focus:outline-none text-gray-500 absolute top-1/2 transform -translate-y-1/2 right-1"
            onClick={toggle}
        >
            {!active ? eyeIcon : eyeOffIcon}
        </button>
    );
}

ShowHidePasswordButton.propTypes = {
    toggle: PropTypes.func,
    active: PropTypes.bool,
};

TextField.propTypes = {
    ...TextField.propTypes,
    type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "hidden",
        "number",
        "tel",
        "url",
        "datetime",
    ]),
    variant: PropTypes.oneOf(["filled", "regular", "underlined"]),
    scheme: PropTypes.oneOf(["primary", "secondary", "red", "green", "yellow"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    margin: PropTypes.bool,
    "full-width": PropTypes.bool,
    label: PropTypes.string,
    "wrapper-ref": PropTypes.oneOfType<any>([PropTypes.func, PropTypes.object]),
    "label-ref": PropTypes.oneOfType<any>([PropTypes.func, PropTypes.object]),
    "label-variant": PropTypes.oneOf(["static", "floating"]),
    component: PropTypes.elementType as any,
};
