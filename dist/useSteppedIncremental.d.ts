declare type useSteppedIncrementalReturn = [number, () => void, number, () => void];
/**
 * Returs 4 things, the first two are a numeric state, and a function, once the function is called, the
 * number will be incrementing its value one by one to reach 'limit' in 'duration' miliseconds.
 * The other one is a `CONDITION` state, which value deppends on the condition of the incremental.
 * 0 means not started, 1 means started and in progress ans 2 means ended.
 * And the final thing returned is a function to restart the incremental.
 * @param limit The max value that is going to have the number.
 * @param duration The time in miliseconds that the number will take to reach its max value.
 * @param initialValue The number that will be the intial value, and the value that is gonna take the
 * counter is reseted.
 * @example
 * ```jsx
 * const Counter = () => {
 *      const [count, startCount, condition, resetCount] = useSteppedIncremental(100, 1000)
 *
 *      useEffect(() => resetCount(), [])
 *
 *      return (
 *          <div>
 *              Your calification: {condition !== 0 ? count : '?'}
 *              { condition === 2 ? 'CONGRATULATIONS' : ''}
 *              <button onClick={startCount}>See my calification</button>
 *          </div>
 *      )
 * }
 * ```
 */
export default function useSteppedIncremental(limit: number, duration: number, initialValue?: number): useSteppedIncrementalReturn;
export {};
