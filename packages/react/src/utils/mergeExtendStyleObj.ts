import mergeWith from "lodash.mergewith";

export function mergeExtendStyleObj<S>(
    styleObj: S,
    themeStyleObj: Required<S>,
): Required<S> {
    function extendModifier(value: string | object, srcValue: string | object) {
        if (typeof value === "string" && typeof srcValue === "string") {
            return `${srcValue} ${value}`;
        }
    }

    return mergeWith({}, styleObj, themeStyleObj, extendModifier);
}
