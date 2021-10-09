declare type useLoadingReturn = [
    boolean,
    () => void,
    () => void
];
/**
 * A more intuitive 'useBoolean', used to handle loadings (like in async-await)
 * It also returns a boolean indicating if its loading, and two functions to start and end the loading
 * @param initialValue The initial value of the boolean, default is false
 */
export default function useLoading(initialValue?: boolean): useLoadingReturn;
export {};
