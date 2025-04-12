import type { GlobalState, IProduct, ProductStatus } from 'shared/interfaces'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { asyncStorage } from './asyncStorage'

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set, get) => ({
      cartProducts: [],

      changeProductStatus: (id) => {
        const updatedItems = get().cartProducts.map((item) =>
          item.id === id
            ? {
                ...item,
                status:
                  item.status === 'pending'
                    ? ('purchased' as ProductStatus)
                    : ('pending' as ProductStatus),
              }
            : item,
        )
        set({ cartProducts: updatedItems })
      },

      deleteProduct: (id) => {
        set({
          cartProducts: get().cartProducts.filter((item) => item.id !== id),
        })
      },

      addProduct: (text) => {
        const newItem: IProduct = {
          id: Date.now(),
          text,
          status: 'pending',
        }
        set({ cartProducts: [...get().cartProducts, newItem] })
      },
    }),
    {
      name: 'my-cart-app-store',
      storage: asyncStorage,
    },
  ),
)
