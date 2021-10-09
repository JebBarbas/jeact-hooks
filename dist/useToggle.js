import { useState } from 'react';
/**
 * Returns a boolean value and a function to toggle it between its 2 values
 * @param initialValue The initial value of the boolean, default is false
 */
export default function useToggle(initialValue) {
    const [boolean, setBoolean] = useState(initialValue ?? false);
    const toggleBoolean = () => setBoolean(!boolean);
    return [boolean, toggleBoolean];
}
//# sourceMappingURL=useToggle.js.map