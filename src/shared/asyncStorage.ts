import AsyncStorage from '@react-native-async-storage/async-storage'

import { GlobalState } from './interfaces'

export const asyncStorage = {
  getItem: async (key: string): Promise<{ state: GlobalState } | null> => {
    const item = await AsyncStorage.getItem(key)
    return item ? { state: JSON.parse(item) as GlobalState } : null
  },
  setItem: async (key: string, value: { state: GlobalState }): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(value.state))
  },
  removeItem: async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key)
  },
}
