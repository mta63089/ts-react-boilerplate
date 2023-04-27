Page 5: Setting up Redux using @reduxjs/toolkit

In this page, we will provide step-by-step instructions for setting up Redux using @reduxjs/toolkit.

In the /src/redux folder, create a new slice file to hold your application's state. A slice file contains all the logic related to a specific feature of your application.

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

Here, we define a new counter slice that holds a `value` state and `increment`, `decrement`, and `incrementByAmount` reducers to update the state. 

In the /src/redux folder, create a new store file to hold your application's store. The store is a centralized place where all the state for your application is managed.

```typescript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

Here, we create a new store that holds the counter slice we defined earlier.

In your App.tsx file, import your store and wrap your app with the Provider component. The Provider component is used to provide the store to all components of your application.

```typescript
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      // your app components and routes
    </Provider>
  );
}
```

Here, we import the store we created earlier and wrap our App component with the Provider component.

That's it! You now have Redux set up using @reduxjs/toolkit.