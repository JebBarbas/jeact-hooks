# @jeact/hooks

![NPM](https://img.shields.io/npm/l/@jeact/hooks?color=blue&logo=npm&style=flat-square)
![Travis (.com)](https://img.shields.io/travis/com/jebbarbas/jeact-hooks?logo=travis&style=flat-square)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@jeact/hooks?logo=librariesdotio&style=flat-square)
![npm](https://img.shields.io/npm/dt/@jeact/hooks?color=red&logo=npm&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@jeact/hooks?color=red&logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/@jeact/hooks?color=red&logo=npm)

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

### useSequence
Returns a value of the given possible values and to functions, one to make the value the next and one to make it
the previous (if the value is for example the last one in the possible values and you use the next function
then its gonna return the first value).

You can see this hook like a roulette, you have one value, and you can spin the roulette in any direction, and is 
always gonna repeat the same values in same order, if you return to the first value and go back, you will get the
last one, and if you go to the last value and go to the next, you'll get the first one.

### useDramaticValue

***WARNING: This hook has the same warnings as the useSteppedIncremental***

Returs 4 things, the first two are a numeric state, and a function, once the function is called, the
number will be randomly change its value ultil duration miliseconds have passed once the function was called.
The other one is a `CONDITION` state, which value deppends on the condition of the dramatic.
0 means not started, 1 means started and in progress ans 2 means ended.
And the final thing returned is a function to restart the dramatic.