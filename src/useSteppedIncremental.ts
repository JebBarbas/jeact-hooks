import { useState } from "react";
import useBoolean from "./useBoolean";

type useSteppedIncrementalReturn = [
    count:number,
    startIncrement: () => void
]

/**
 * EXPERIMENTAL HOOK.
 * Returns a state with a number and a function, once the function is called, the number will be 
 * incrementing its value one by one to reach 'limit' in 'duration' miliseconds.
 * @experimental
 * @param limit The max value that is going to have the number.
 * @param duration The time in miliseconds that the number will take to reach its max value.
 * @param initialValue UNSUPORTED YET:)
 */
export default function useSteppedIncremental(limit:number, duration:number, initialValue?:number):useSteppedIncrementalReturn {
    const [count, setCount] = useState(initialValue ?? 0)
    const [incrementStarted, startIncrement, endIncrement] = useBoolean()

    const intervalTime = duration / limit
    let timeout = setTimeout(()=>{0})

    if(incrementStarted){
        if(count == limit){
            endIncrement()
        }
        else{
            timeout = setTimeout(() => setCount(count + 1), intervalTime)
        }
    }
    else{
        clearTimeout(timeout)
    }

    return [count, startIncrement]
}