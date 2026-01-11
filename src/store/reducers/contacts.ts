import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/enums/contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Serafin Soel',
      genre: enums.Genre.MALE,
      relation: enums.Relation.SERVICE,
      phone: '(11) 11111-1111',
      email: 'serafinsoel@exemplo.com',
      getDisplayName: function (): string {
        return `${this.name} (${this.phone})`
      }
    },
    {
      id: 2,
      name: 'Rafaela Victoria',
      genre: enums.Genre.FEMALE,
      relation: enums.Relation.PROFESSIONAL,
      phone: '(22) 22222-2222',
      email: 'rafaelavictoria@empresa.teste',
      getDisplayName: function (): string {
        return `${this.name} (${this.phone})`
      }
    },
    {
      id: 3,
      name: 'Jonas leal',
      genre: enums.Genre.MALE,
      relation: enums.Relation.FRIEND,
      phone: '(33) 33333-3333',
      email: 'jonasleal@exemplo.com',
      getDisplayName: function (): string {
        return `${this.name} (${this.phone})`
      }
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const indexOfContact = state.items.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexOfContact >= 0) {
        state.items[indexOfContact] = {
          ...state.items[indexOfContact],
          ...action.payload,
          getDisplayName: function (): string {
            return `${this.name} (${this.phone})`
          }
        }
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactAlreadyExist = state.items.find(
        (contact) =>
          contact.phone === action.payload.phone &&
          contact.name.toLowerCase() === action.payload.name.toLowerCase() &&
          contact.email === action.payload.email
      )

      if (!contactAlreadyExist) {
        const maxId = state.items.reduce(
          (max, contact) => Math.max(max, contact.id),
          0
        )
        const newContact = {
          ...action.payload,
          id: maxId + 1,
          getDisplayName: function (): string {
            return `${this.name} (${this.phone})`
          }
        }
        state.items.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactsSlice.actions
export default contactsSlice.reducer
