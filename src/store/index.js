import { configureStore } from '@reduxjs/toolkit'; 
import navReducer from './visible';

const store = configureStore({
    reducer: {
        visibility: navReducer,
    }
});

export default store;
