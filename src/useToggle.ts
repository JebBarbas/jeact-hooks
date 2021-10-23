import { useState } from 'react'

type useToggleReturn = [ boolean, () => void ]

/**
 * Returns a boolean value and a function to toggle it between its 2 values
 * @param initialValue The initial value of the boolean, default is false
 * @example
 * const HideableDiv = ({children}) => {
 *      const [seeing, toggleSeeing] = useToggle(true)
 * 
 *      return (
 *          <div>
 *              <button onClick={toggleSeeing}>{seeing ? 'Hide' : 'See'}</button>
 *                  {
 *                      seeing && children
 *                  }
 *          </div>
 *      )
 * }
 */
export default function useToggle(initialValue?:boolean):useToggleReturn{
    const [boolean, setBoolean] = useState(initialValue ?? false)
    const toggleBoolean = () => setBoolean(!boolean)

    return [boolean, toggleBoolean]
}