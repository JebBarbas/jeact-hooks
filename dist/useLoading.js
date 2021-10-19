import useBoolean from './useBoolean';
/**
 * A more intuitive 'useBoolean', used to handle loadings (like in async-await)
 * It also returns a boolean indicating if its loading, and two functions to start and end the loading
 * @param initialValue The initial value of the boolean, default is false
 */
export default function useLoading(initialValue) {
    var _a = useBoolean(initialValue !== null && initialValue !== void 0 ? initialValue : false), loading = _a[0], startLoading = _a[1], endLoading = _a[2];
    return [loading, startLoading, endLoading];
}
//# sourceMappingURL=useLoading.js.map