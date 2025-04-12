import { FC } from 'react'
import { TextInput } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

import useThemeColors from 'hooks/useThemeColors'
import { IAddInput, IColors } from 'shared/interfaces'

const AddInput: FC<IAddInput> = ({ placeholder, value, onChangeText }) => {
  const colors = useThemeColors()
  const styles = createStyles(colors)

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      maxLength={30}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.textSecondary}
    />
  )
}

const createStyles = (colors: IColors) =>
  ScaledSheet.create({
    input: {
      backgroundColor: colors.backgroundSurface,
      borderColor: colors.borderSecondary,
      borderRadius: '8@ms',
      borderWidth: '1@ms',
      color: colors.textPrimary,
      fontSize: '14@ms',
      height: '48@ms',
      paddingHorizontal: '16@ms',
    },
  })

export default AddInput
