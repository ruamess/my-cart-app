import { ms } from 'react-native-size-matters'
import Svg, { Path } from 'react-native-svg'

import useThemeColors from 'hooks/useThemeColors'

const Purchased = () => {
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
        d="M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
        stroke={colors.colorAccent}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m6.75 9 1.5 1.5 3-3"
        stroke={colors.colorAccent}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Purchased
