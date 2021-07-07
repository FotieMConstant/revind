export * from "./src/button";
export function toClassStr(classObj) {
    var classRaw = Object.values(classObj).reduce(function (acc, val) {
        if (typeof val === "object") {
            return acc.concat(toClassStr(val));
        }
        else {
            return acc.concat(val);
        }
    }, []);
    return classRaw
        .map(function (classStr) { return classStr.split(" "); })
        .reduce(function (acc, val) { return acc.concat(val); });
}
//# sourceMappingURL=index.js.map