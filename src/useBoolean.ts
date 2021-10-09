import { useState } from 'react'

type useBooleanReturn = [
    boolean, () => void, () => void
]

/**
 * Returns a boolean value and 2 functions, one to make the boolean true, and another to make it false
 * @param initialValue The initial value of the boolean, default is false
 */
export default function useBoolean(initialValue?:boolean):useBooleanReturn{
    const [boolean, setBoolean] = useState(initialValue ?? false)

    const setBooleanTrue = () => setBoolean(true)
    const setBooleanFalse = () => setBoolean(false)

    return [boolean, setBooleanTrue, setBooleanFalse]
}