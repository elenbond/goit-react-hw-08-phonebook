import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./contacts/filtersSlice";
import { authReducer } from './auth/authSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    // blacklist: ['filter'],
    whitelist: ['token'],
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const middleware = [
    ...getDefaultMiddleware ({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        contacts: contactsReducer,
        filter: filtersReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);