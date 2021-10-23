import { useState } from "react";
import useBoolean from "./useBoolean";

type useSteppedIncrementalReturn = [ number, () => void, number, () => void ]

const CONDITION = {
    NOT_STARTED: 0,
    STARTED: 1,
    ENDED: 2
}

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
export default function useSteppedIncremental(limit:number, duration:number, initialValue?:number):useSteppedIncrementalReturn {
    const [count, setCount] = useState(initialValue ?? 0)
    const [incrementStarted, startIncrement, endIncrement] = useBoolean()
    const [condition, setCondition] = useState(CONDITION.NOT_STARTED)

    const intervalTime = duration / (limit - (initialValue ?? 0))
    let timeout = setTimeout(()=>{0})

    const resetIncrement = () => {
        setCount(initialValue ?? 0)
        setCondition(CONDITION.NOT_STARTED)
    }

    if(incrementStarted){
        if(condition == 0){
            setCondition(CONDITION.STARTED)
        }

        if(count == limit){
            endIncrement()
            setCondition(CONDITION.ENDED)
        }
        else{
            timeout = setTimeout(() => setCount(count + 1), intervalTime)
        }
    }
    else{
        clearTimeout(timeout)
    }

    return [count, startIncrement, condition, resetIncrement]
}