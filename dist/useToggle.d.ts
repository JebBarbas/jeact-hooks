declare type useToggleReturn = [
    boolean,
    () => void
];
/**
 * Returns a boolean value and a function to toggle it between its 2 values
 * @param initialValue The initial value of the boolean, default is false
 */
export default function useToggle(initialValue?: boolean): useToggleReturn;
export {};
