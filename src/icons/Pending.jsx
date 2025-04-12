import { ms } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

import useThemeColors from 'hooks/useThemeColors'

const Pending = () => {
  const colors = useThemeColors()

  return (
    <Svg
      width={ms(18)}
      height={ms(18)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.575 1.637a7.5 7.5 0 0 1 2.85 0m0 14.726a7.5 7.5 0 0 1-2.85 0M13.207 2.79a7.5 7.5 0 0 1 2.017 2.026M1.637 10.425a7.5 7.5 0 0 1 0-2.85m13.573 5.632a7.5 7.5 0 0 1-2.026 2.017m3.179-7.649a7.5 7.5 0 0 1 0 2.85M2.79 4.793a7.5 7.5 0 0 1 2.026-2.017M4.793 15.21a7.5 7.5 0 0 1-2.017-2.026"
        stroke={colors.textPrimary}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Pending
