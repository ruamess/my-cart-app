import { ReactNode } from 'react'

export type ProductStatus = 'pending' | 'purchased'

export interface GlobalState {
  cartProducts: IProduct[]
  changeProductStatus: (id: number) => void
  deleteProduct: (id: number) => void
  addProduct: (text: string) => void
}

export interface IAddButton {
  text: string
  onPress: () => void
  disabled?: boolean
}

export interface IAddInput {
  placeholder: string
  value: string
  onChangeText: (text: string) => void
}

export interface IProduct {
  id: number
  text: string
  status: ProductStatus
}

export interface IProductsList {
  icon: ReactNode
  products: IProduct[]
}

export interface IProductItem extends Omit<IProductsList, 'products'> {
  text: string
  onPressDelete: () => void
  onPressIcon: () => void
}

export interface ITabBar {
  currentPage: number
  changePage: (value: number) => void
}

export interface ITabBarItem {
  icon: ReactNode
  text: string
  active: boolean
  onPress: () => void
}

export interface IHeader {
  currentPage: number
  changePage: (value: number) => void
}

export interface IColors {
  backgroundPrimary: string
  backgroundSurface: string
  textPrimary: string
  textSecondary: string
  textReversed: string
  colorAccent: string
  colorAccentHover: string
  borderPrimary: string
  borderSecondary: string
}
