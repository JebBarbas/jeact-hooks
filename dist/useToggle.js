import { useState } from 'react';
/**
 * Returns a boolean value and a function to toggle it between its 2 values
 * @param initialValue The initial value of the boolean, default is false
 */
export default function useToggle(initialValue) {
    var _a = useState(initialValue !== null && initialValue !== void 0 ? initialValue : false), boolean = _a[0], setBoolean = _a[1];
    var toggleBoolean = function () { return setBoolean(!boolean); };
    return [boolean, toggleBoolean];
}
//# sourceMappingURL=useToggle.js.map