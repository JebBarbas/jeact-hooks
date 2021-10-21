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
Returns a state with a `number` value and a function, once the function is called, the number will be 
incrementing its value one by one to reach 'limit' in 'duration' miliseconds.