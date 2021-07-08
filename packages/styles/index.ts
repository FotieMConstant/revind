import { buttonStyleObj } from "./src/button";
import { flexStyleObj } from "./src/flex";

export * from "./src/button";
export * from "./src/flex";

export function toClassStr(classObj: Record<string, any>): string[] {
    const classRaw = Object.values(classObj).reduce<string[]>((acc, val) => {
        if (typeof val === "object") {
            return acc.concat(toClassStr(val));
        } else {
            return acc.concat(val);
        }
    }, []);
    return classRaw
        .map((classStr) => classStr.split(" "))
        .reduce((acc, val) => acc.concat(val));
}

export default toClassStr({ ...buttonStyleObj, ...flexStyleObj });
