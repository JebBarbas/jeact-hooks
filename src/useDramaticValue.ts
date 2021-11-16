import { useState, useCallback } from "react";
import useBoolean from "./useBoolean";

type useDramaticValueReturn = [ number, () => void, number, () => void ]

const CONDITION = {
    NOT_STARTED: 0,
    STARTED: 1,
    ENDED: 2
}

const getRandomBetween = (min:number, max:number) => {
    const difference = max - min
    return min + Math.floor(Math.random() * difference)
}

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
export default function useDramaticValue(final:number, duration:number, intervalTime: number, valuesInterval: [number, number], initialValue?:number):useDramaticValueReturn {
    const [count, setCount] = useState(initialValue ?? 0)
    const [dramaticStarted, startDramatic, endDramatic] = useBoolean()
    const [condition, setCondition] = useState(CONDITION.NOT_STARTED)

    let timeout = setTimeout(()=>{0})

    const resetDramatic = () => {
        setCount(initialValue ?? 0)
        setCondition(CONDITION.NOT_STARTED)
    }

    const functionToEndTheDramatic = useCallback(() => {
        setCount(final)
        endDramatic()
        setCondition(CONDITION.ENDED)
    },[endDramatic, final])

    const functionToStartTheDramatic = useCallback(() => {
        setCondition(CONDITION.STARTED)
        setTimeout(functionToEndTheDramatic, duration)
    },[duration, functionToEndTheDramatic])

    if(dramaticStarted){
        if(condition == CONDITION.NOT_STARTED){
            functionToStartTheDramatic()
        }

        timeout = setTimeout(() => setCount(getRandomBetween(valuesInterval[0], valuesInterval[1])), intervalTime)
    }
    else{
        clearTimeout(timeout)
    }

    return [count, startDramatic, condition, resetDramatic]
}