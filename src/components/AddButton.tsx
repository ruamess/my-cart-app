import { FC, useState } from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import Animated, { interpolateColor, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { ScaledSheet } from 'react-native-size-matters'

import useThemeColors from 'hooks/useThemeColors'
import { IAddButton, IColors } from 'shared/interfaces'

const AddButton: FC<IAddButton> = ({ disabled, text, onPress }) => {
  const [scaleValue, setScaleValue] = useState(1)

  const colors = useThemeColors()
  const styles = createStyles(colors, !!disabled)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scaleValue, { duration: scaleValue === 1 ? 300 : 80 }) }],
    backgroundColor: interpolateColor(
      scaleValue,
      [0.95, 1],
      [colors.colorAccentHover, colors.colorAccent],
    ),
  }))

  return (
    <TouchableWithoutFeedback
      disabled={!!disabled}
      onPressIn={() => setScaleValue(0.95)}
      onPressOut={() => setScaleValue(1)}
      onPress={onPress}
    >
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.buttonText}>{text}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const createStyles = (colors: IColors, disabled: boolean) =>
  ScaledSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: colors.colorAccent,
      borderRadius: '8@ms',
      height: '48@ms',
      justifyContent: 'center',
      opacity: disabled ? 0.7 : 1,
      width: '100%',
    },
    buttonText: {
      color: colors.textReversed,
      fontSize: '14@ms',
      fontWeight: '500',
    },
  })

export default AddButton
