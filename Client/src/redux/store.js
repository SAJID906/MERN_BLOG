  import { combineReducers, configureStore } from '@reduxjs/toolkit'
  import UserRedcer from '../redux/user/userSlice'
  import ThemeRedcer from '../redux/theme/themeSlice'
  import  { persistReducer,persistStore } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const rootReducer=combineReducers({
    user:UserRedcer,
    theme:ThemeRedcer
  })
  const persistConfig={
    key:'root',
    version:1,
    storage,
  }
  const PersistReducer=persistReducer(persistConfig,rootReducer)
  // Middleware setup 

  export const store = configureStore({
    reducer: {
      user:PersistReducer,
     
    
    },
  })
  export const persistor = persistStore(store)