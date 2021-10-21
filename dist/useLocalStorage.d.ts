declare type useLocalStorageReturn = [
    item: unknown,
    setItem: (newValue: unknown) => void
];
/**
 * Returns a state and a function to change it, but, when the state is initialized, checks if this value exists in
 * localStorage, and when the state is setted, the localStorage value changes aswell.
 * @param itemKey The key of the item (Put different keys to each value you want to save,
 * you can use the same key in different components to manage the same localStorage value).
 * @param defaultValue The default value to the initialState if the localStorage key doesn't exist.
 */
export default function useLocalStorage(itemKey: string, defaultValue: unknown): useLocalStorageReturn;
export {};
