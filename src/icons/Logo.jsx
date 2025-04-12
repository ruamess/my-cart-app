import { StyleSheet, Text, View } from 'react-native'
import { ms } from 'react-native-size-matters'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

import useThemeColors from 'hooks/useThemeColors'

const Logo = () => {
  const colors = useThemeColors()

  return (
    <View style={styles.container}>
      <Svg
        width={ms(27)}
        height={ms(25)}
        viewBox="0 0 27 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#a)">
          <Path
            d="M0 11.526c0 1.097.669 1.785 1.764 1.785h23.46c1.096 0 1.776-.688 1.776-1.785V9.835c0-1.097-.68-1.797-1.775-1.797H1.764C.669 8.038 0 8.738 0 9.835zm2.213-1.633h22.562c.254 0 .403.152.403.408v.747c0 .257-.15.42-.403.42H2.213c-.253 0-.391-.163-.391-.42V10.3c0-.256.138-.408.391-.408M7.333 25h12.335c2.663 0 3.482-1.575 3.827-3.266l1.833-8.89-1.81-.315-1.717 8.493c-.312 1.493-.773 2.112-2.456 2.112H7.655c-1.683 0-2.144-.619-2.456-2.112L3.482 12.53l-1.81.315 1.833 8.89C3.85 23.425 4.669 25 7.332 25m1.256-3.138c.426-.07.657-.385.6-.758l-.958-6.101c-.069-.386-.392-.595-.807-.537-.426.082-.668.385-.6.758l.958 6.101c.069.385.38.607.807.537m3.309-.07c.415-.023.691-.303.668-.688l-.369-6.043c-.034-.397-.322-.665-.75-.63-.414.035-.69.315-.668.712l.37 6.03c.022.397.334.654.749.619m3.216 0c.415.035.726-.222.75-.618l.368-6.031c.023-.397-.253-.677-.668-.712-.427-.035-.715.233-.75.63l-.369 6.043c-.023.385.254.665.669.688m3.297.07c.415.07.738-.152.807-.537l.969-6.1c.057-.374-.185-.678-.611-.759-.415-.058-.738.152-.808.537l-.956 6.1c-.058.374.173.689.6.759M3.724 8.516H6.04l4.035-7.104c.311-.56.058-1.05-.369-1.283-.415-.222-.968-.187-1.28.338zm17.235 0h2.317L18.573.467c-.3-.513-.854-.548-1.28-.338-.415.233-.68.723-.37 1.283z"
            fill={colors.colorAccent}
          />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill={colors.colorAccent} d="M0 0h27v25H0z" />
          </ClipPath>
        </Defs>
      </Svg>
      <Text style={[styles.title, { color: colors.colorAccent }]}>My Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    gap: ms(7),
  },
  title: {
    fontSize: ms(20),
    fontWeight: '700',
  },
})

export default Logo
