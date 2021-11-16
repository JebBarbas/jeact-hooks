declare type useSequenceReturn<T> = [T, () => void, () => void];
/**
 * Returns a value of the given possible values and to functions, one to make the value the next and one to make it
 * the previous (if the value is for example the last one in the possible values and you use the next function
 * then its gonna return the first value).
 *
 * You can see this hook like a roulette, you have one value, and you can spin the roulette in any direction, and is
 * always gonna repeat the same values in same order, if you return to the first value and go back, you will get the
 * last one, and if you go to the last value and go to the next, you'll get the first one.
 *
 * @param values The possible values that the sequence can have
 * @example
 * const Colors = () => {
 *      const [actualColor, nextColor, prevColor] = useSequence('red','orange','yellow','green','blue','purple')
 *
 *      return (
 *          <div style={{backgroundColor: actualColor}}>
 *              The actual color is: {actualColor}
 *              <button onClick={nextColor}> Next Color </button>
 *              <button onClick={nextColor}> Previous Color </button>
 *          </div>
 *      )
 * }
 */
export default function useSequence<T>(...values: T[]): useSequenceReturn<T>;
export {};
