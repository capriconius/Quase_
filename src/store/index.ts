import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './reducers/contacts'
import filterReducer from './reducers/filter'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
