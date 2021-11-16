declare type useDramaticValueReturn = [number, () => void, number, () => void];
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
export default function useDramaticValue(final: number, duration: number, intervalTime: number, valuesInterval: [number, number], initialValue?: number): useDramaticValueReturn;
export {};
