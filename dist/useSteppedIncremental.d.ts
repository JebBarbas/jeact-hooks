declare type useSteppedIncrementalReturn = [
    count: number,
    startIncrement: () => void
];
/**
 * EXPERIMENTAL HOOK.
 * Returns a state with a number and a function, once the function is called, the number will be
 * incrementing its value one by one to reach 'limit' in 'duration' miliseconds.
 * @experimental
 * @param limit The max value that is going to have the number.
 * @param duration The time in miliseconds that the number will take to reach its max value.
 * @param initialValue UNSUPORTED YET:)
 */
export default function useSteppedIncremental(limit: number, duration: number, initialValue?: number): useSteppedIncrementalReturn;
export {};
