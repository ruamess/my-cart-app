import { ms } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

import useThemeColors from 'hooks/useThemeColors'

const Trash = () => {
  const colors = useThemeColors()

  return (
    <Svg
      width={ms(20)}
      height={ms(20)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2 4h12m-1.333 0v9.333c0 .667-.667 1.334-1.334 1.334H4.667c-.667 0-1.334-.667-1.334-1.334V4m2 0V2.667C5.333 2 6 1.333 6.667 1.333h2.666c.667 0 1.334.667 1.334 1.334V4m-4 3.333v4m2.666-4v4"
        stroke={colors.textSecondary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Trash
