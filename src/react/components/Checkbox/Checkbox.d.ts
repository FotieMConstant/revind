import {
  DetailedHTMLProps,
  ForwardedRef,
  InputHTMLAttributes,
  ReactElement
} from "react";
declare interface CheckboxProps
    extends DetailedHTMLProps<
        Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
        HTMLInputElement
    > {
    checked: boolean;
    checkedIcon: ReactElement;
    scheme: "primary" | "secondary" | "red" | "green" | "yellow";
    icon: ReactElement;
    "wrapper-props": React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
    >;
    "wrapper-ref": ForwardedRef<HTMLLabelElement>;
    size: "sm" | "md" | "lg" | "xl" | "xxl";
    value: "on" | "off" | string;
    label: string | ReactElement;
    "label-direction": "top" | "left" | "right" | "bottom";
    "label-spacing": boolean;
}

declare function Checkbox(props: CheckboxProps): ReactElement;

export default Checkbox;
