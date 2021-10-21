import { useState } from "react";
import useBoolean from "./useBoolean";
/**
 * EXPERIMENTAL HOOK.
 * Returns a state with a number and a function, once the function is called, the number will be
 * incrementing its value one by one to reach 'limit' in 'duration' miliseconds.
 * @experimental
 * @param limit The max value that is going to have the number.
 * @param duration The time in miliseconds that the number will take to reach its max value.
 * @param initialValue UNSUPORTED YET:)
 */
export default function useSteppedIncremental(limit, duration, initialValue) {
    var _a = useState(initialValue !== null && initialValue !== void 0 ? initialValue : 0), count = _a[0], setCount = _a[1];
    var _b = useBoolean(), incrementStarted = _b[0], startIncrement = _b[1], endIncrement = _b[2];
    var intervalTime = duration / limit;
    var timeout = setTimeout(function () { 0; });
    if (incrementStarted) {
        if (count == limit) {
            endIncrement();
        }
        else {
            timeout = setTimeout(function () { return setCount(count + 1); }, intervalTime);
        }
    }
    else {
        clearTimeout(timeout);
    }
    return [count, startIncrement];
}
//# sourceMappingURL=useSteppedIncremental.js.map