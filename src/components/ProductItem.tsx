import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import useThemeColors from 'hooks/useThemeColors'
import Trash from 'icons/Trash'
import { IColors, IProductItem } from 'shared/interfaces'

const ProductItem: FC<IProductItem> = ({ icon, text, onPressIcon, onPressDelete }) => {
  const colors = useThemeColors()
  const styles = createStyles(colors)

  return (
    <View style={styles.itemRow}>
      <TouchableOpacity activeOpacity={0.5} onPress={onPressIcon} style={styles.itemContent}>
        {icon}

        <Text style={styles.itemText}>{text}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.itemDelete} onPress={onPressDelete} activeOpacity={0.5}>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}

const createStyles = (colors: IColors) =>
  ScaledSheet.create({
    itemContent: {
      flex: 1,
      flexDirection: 'row',
      gap: '7@ms',
      paddingLeft: '10@ms',
      paddingVertical: '14@ms',
    },
    itemDelete: {
      alignItems: 'flex-end',
      height: '50@ms',
      justifyContent: 'center',
      paddingHorizontal: '10@ms',
    },
    itemRow: {
      alignItems: 'center',
      backgroundColor: colors.backgroundSurface,
      borderBottomWidth: '1@ms',
      borderColor: colors.borderPrimary,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemText: {
      color: colors.textPrimary,
      flexShrink: 1,
      flexWrap: 'wrap',
      fontSize: '14@ms',
      fontWeight: '500',
      lineHeight: '20@ms',
    },
  })

export default ProductItem
