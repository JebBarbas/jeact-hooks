# @jeact/hooks
Some hooks to handle states in a very easy way.

@jeact/hooks its a module made to avoid writing some repeating code in React, like the toggle functionality,
or the loading functionality.

## Instalation
```
npm i @jeact/hooks
```

## Hooks

### useBoolean
Returns a `boolean` value, and two functions, one to make the boolean `true` and another to make
it `false`.

### useLoading
Returns the same as `useBoolean`, but this hook has a more-expressive name.

### useToggle
Returns a `boolean` value and a function to toggle the value between `true` and `false`.

### useLocalStorage
Returns a like-state `value` getted from localStorage and a function to change it and store its new value
in localStorage (its like a React state, but it will save the value in localStorage).

### useSteppedIncrement

***WARNING: This hook has some warnings, see the final of this section to see them***

Returs 4 things, the first two are a numeric state, and a function, once the function is called, the
number will be incrementing its value one by one to reach 'limit' in 'duration' miliseconds.
The other one is a `CONDITION` state, which value deppends on the condition of the incremental.
0 means not started, 1 means started and in progress ans 2 means ended.
And the final thing returned is a function to restart the incremental.

WARNINGS:
- If you put very high 'max' values and low time, the real time it will take to reach the max number will be higher,
please verify this.

- A bad use of the `startIncrement` function can result in a react error: `Too many re-renders. React limits 
the number of renders to prevent an infinite loop.`.

- It's recomended to put the `useSteppedIncrement` hook in a short component, this avoids to re-render all the
big component.

- This is a bug that I don't know how to fix, but, if you unmount the component while the increment is
active, this will result in a react warning: `Can't perform a React state update on an unmounted`.

So, as you can see, this hook works, but you need to be very careful.