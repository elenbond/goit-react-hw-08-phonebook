import { configureStore } from "@reduxjs/toolkit";
// import {persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['filter'],
// }

// const reducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filtersReducer,
// });

// const persistedContactsReducer = persistReducer(persistConfig, reducer);

// const middleware = getDefaultMiddleware =>
//     getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         }
//     });

// export const store = configureStore({
//     reducer: persistedContactsReducer,
//     middleware,
// });

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    },
})

// export const persistor = persistStore(store);