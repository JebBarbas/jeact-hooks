import { useState, useCallback } from "react";
import useBoolean from "./useBoolean";
var CONDITION = {
    NOT_STARTED: 0,
    STARTED: 1,
    ENDED: 2
};
var getRandomBetween = function (min, max) {
    var difference = max - min;
    return min + Math.floor(Math.random() * difference);
};
/**
 * Returs 4 things, the first two are a numeric state, and a function, once the function is called, the
 * number will be randomly change its value ultil duration miliseconds have passed once the function was called.
 * The other one is a `CONDITION` state, which value deppends on the condition of the dramatic.
 * 0 means not started, 1 means started and in progress ans 2 means ended.
 * And the final thing returned is a function to restart the dramatic.
 * @param final The value that is going to show at the end of the dramatic
 * @param duration The duration between the start and the end of the dramatic.
 * @param intervalTime How much miliseconds are gonna be between each random change.
 * @param valuesInterval The interval of values that can have the value in the random changes
 * @param initialValue The initial value before start the dramatic (default is 0)
 * @example
 * ```jsx
 * const Calification = () => {
 *      const [calification, start, condition, reset] = useDramaticValue(100, 5000, 100, [0,100])
 *
 *      useEffect(() => reset(), [])
 *
 *      return (
 *          <div>
 *              Your calification: {condition !== 0 ? calification : '?'}
 *              { condition === 2 ? 'CONGRATULATIONS' : ''}
 *              <button onClick={start}>See my calification</button>
 *          </div>
 *      )
 * }
 * ```
 */
export default function useDramaticValue(final, duration, intervalTime, valuesInterval, initialValue) {
    var _a = useState(initialValue !== null && initialValue !== void 0 ? initialValue : 0), count = _a[0], setCount = _a[1];
    var _b = useBoolean(), dramaticStarted = _b[0], startDramatic = _b[1], endDramatic = _b[2];
    var _c = useState(CONDITION.NOT_STARTED), condition = _c[0], setCondition = _c[1];
    var timeout = setTimeout(function () { 0; });
    var resetDramatic = function () {
        setCount(initialValue !== null && initialValue !== void 0 ? initialValue : 0);
        setCondition(CONDITION.NOT_STARTED);
    };
    var functionToEndTheDramatic = useCallback(function () {
        setCount(final);
        endDramatic();
        setCondition(CONDITION.ENDED);
    }, [endDramatic, final]);
    var functionToStartTheDramatic = useCallback(function () {
        setCondition(CONDITION.STARTED);
        setTimeout(functionToEndTheDramatic, duration);
    }, [duration, functionToEndTheDramatic]);
    if (dramaticStarted) {
        if (condition == CONDITION.NOT_STARTED) {
            functionToStartTheDramatic();
        }
        timeout = setTimeout(function () { return setCount(getRandomBetween(valuesInterval[0], valuesInterval[1])); }, intervalTime);
    }
    else {
        clearTimeout(timeout);
    }
    return [count, startDramatic, condition, resetDramatic];
}
