import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Counter'; // Import your reducer(s)
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default to localStorage

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
