import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import useThemeColors from 'hooks/useThemeColors'
import { IColors, ITabBarItem } from 'shared/interfaces'

const TabBarItem: FC<ITabBarItem> = ({ icon, text, active, onPress }) => {
  const colors = useThemeColors()
  const styles = createStyles(colors)

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={[styles.tabItem, active ? styles.tabActive : styles.tabInactive]}>
        {icon}
        <Text style={styles.tabText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const createStyles = (colors: IColors) =>
  ScaledSheet.create({
    tabActive: {
      opacity: 1,
    },
    tabInactive: {
      opacity: 0.5,
    },
    tabItem: {
      alignItems: 'center',
      flexDirection: 'row',
      gap: '5@ms',
      paddingHorizontal: '20@ms',
      paddingVertical: '20@ms',
    },
    tabText: {
      color: colors.textPrimary,
      fontSize: '14@ms',
      fontWeight: '500',
    },
  })

export default TabBarItem
