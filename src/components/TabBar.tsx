import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import useThemeColors from 'hooks/useThemeColors'
import Pending from 'icons/Pending'
import Purchased from 'icons/Purchased'
import { IColors, ITabBar } from 'shared/interfaces'

import TabBarItem from './TabBarItem'

const TabBar: FC<ITabBar> = ({ currentPage, changePage }) => {
  const { t } = useTranslation()

  const colors = useThemeColors()
  const styles = createStyles(colors)

  return (
    <View style={styles.tabBar}>
      <TabBarItem
        active={currentPage === 0}
        icon={<Pending />}
        text={t('Pending')}
        onPress={() => changePage(0)}
      />

      <TabBarItem
        active={currentPage === 1}
        icon={<Purchased />}
        text={t('Purchased')}
        onPress={() => changePage(1)}
      />
    </View>
  )
}

const createStyles = (colors: IColors) =>
  ScaledSheet.create({
    tabBar: {
      alignItems: 'center',
      borderBottomWidth: '1@ms',
      borderColor: colors.borderPrimary,
      flexDirection: 'row',
      gap: '30@s',
      justifyContent: 'center',
      marginHorizontal: '22@ms',
    },
  })

export default TabBar
