import { useState } from "react";
/**
 * Returns a state and a function to change it, but, when the state is initialized, checks if this value exists in
 * localStorage, and when the state is setted, the localStorage value changes aswell.
 * @param itemKey The key of the item (Put different keys to each value you want to save,
 * you can use the same key in different components to manage the same localStorage value).
 * @param defaultValue The default value to the initialState if the localStorage key doesn't exist.
 */
export default function useLocalStorage(itemKey, defaultValue) {
    if (typeof localStorage == 'undefined') {
        throw new Error("Sorry, localStorage is NOT defined, you can't use this hook. This problem maybe is because you are trying to use this hook in react-native using a device.");
    }
    var saveItem = function () {
        try {
            var value = localStorage.getItem(itemKey);
            return value ? JSON.parse(value) : defaultValue;
        }
        catch (err) {
            console.error("Couldn't parse localStorage item: " + itemKey);
        }
    };
    var _a = useState(saveItem()), item = _a[0], setItemInState = _a[1];
    var setItem = function (newValue) {
        try {
            localStorage.setItem(itemKey, JSON.stringify(newValue));
            setItemInState(newValue);
        }
        catch (err) {
            console.error("New value: " + newValue + " wasn't saved: " + err);
        }
    };
    return [item, setItem];
}
//# sourceMappingURL=useLocalStorage.js.map