import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import Logo from 'icons/Logo'
import { IHeader } from 'shared/interfaces'
import { useGlobalStore } from 'shared/store'

import AddButton from './AddButton'
import AddInput from './AddInput'

const Header: FC<IHeader> = ({ currentPage, changePage }) => {
  const { t } = useTranslation()

  const [inputValue, setInputValue] = useState('')

  const addProduct = useGlobalStore((state) => state.addProduct)

  return (
    <View style={styles.header}>
      <Logo />

      <View style={styles.inputBlock}>
        <AddInput
          placeholder={t('WhatDoYouWantToBuy')}
          value={inputValue}
          onChangeText={setInputValue}
        />
        <AddButton
          text={t('Add')}
          onPress={() => {
            if (inputValue.trim() === '') return
            addProduct(inputValue)
            setInputValue('')
            if (currentPage != 0) changePage(0)
          }}
        />
      </View>
    </View>
  )
}

const styles = ScaledSheet.create({
  header: {
    gap: '50@ms',
    paddingHorizontal: '24@ms',
  },
  inputBlock: {
    gap: '8@ms',
  },
})

export default Header
