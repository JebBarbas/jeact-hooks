import { useState } from 'react';
/**
 * Returns a boolean value and 2 functions, one to make the boolean true, and another to make it false
 * @param initialValue The initial value of the boolean, default is false
 * @example
 * ```jsx
 * const App = () => {
 *      const [darkMode, setDarkmode, setLightmode] = useBoolean()
 *
 *      return (
 *          <div>
 *              Current mode: {darkMode ? 'Darkmode' : 'Lightmode' }
 *              <button onClick={setDarkmode}>Dark</button>
 *              <button onClick={setLightmode}>Light</button>
 *          </div>
 *      )
 * }
 * ```
 */
export default function useBoolean(initialValue) {
    var _a = useState(initialValue !== null && initialValue !== void 0 ? initialValue : false), boolean = _a[0], setBoolean = _a[1];
    var setBooleanTrue = function () { return setBoolean(true); };
    var setBooleanFalse = function () { return setBoolean(false); };
    return [boolean, setBooleanTrue, setBooleanFalse];
}
//# sourceMappingURL=useBoolean.js.map