# Frontend Workshop 2024: Kobayashi Maru

## Tasks

### `useReducer`

- Manage the state of the Kobayashi Maru test using `useReducer`. Dispatch actions accordingly. Manage the different values using this reducer. The KobayashiMaru component should **only** display values, it should not set or change them itself.

### `useEffect`

- Using `useEffect` increment the navigation position of the ship to 255. Do not skip any numbers.
- **Be sure you return a cleanup function!**

### `useMemo`

- Add a section to the right side of the screen that indicates distance from the ship. Calculate that using **just** `nav` and `tac`.

### `useDebugValue`

- Figure out what `useDebugValue` does. Use it in your application.

### Custom Hooks

- Write a custom hook 
- Using a custom hook, increment the tactical position of the ship to 255. Do not skip any numbers. Do not exceed 255.
- Implement your custom hook for NAV and COM.

### `useCallback`

- Add a button to the Kobayashi Maru screen that checks the positions for the values `255`.
- Use `useCallback` with that button.

### Bonus!

- Using either `useRef` or Tailwind styles, rotate the image of the Enterprise
- Using `useLayoutEffect`, change the dead weight tonnage of the Kobayashi Maru as they jettison raw materials to attempt to outrun the Romulans.