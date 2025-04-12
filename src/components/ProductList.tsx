import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import Animated, { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated'
import { ScaledSheet } from 'react-native-size-matters'

import useThemeColors from 'hooks/useThemeColors'
import { IColors, IProductsList } from 'shared/interfaces'
import { useGlobalStore } from 'shared/store'

import ProductItem from './ProductItem'

const ProductList: FC<IProductsList> = ({ icon, products }) => {
  const { t } = useTranslation()

  const { deleteProduct, changeProductStatus } = useGlobalStore()

  const colors = useThemeColors()
  const styles = createStyles(colors)

  return (
    <Animated.ScrollView style={styles.pagerViewPage}>
      {products.length === 0 ? (
        <Text style={styles.noItemsText}>{t('NoProducts')}</Text>
      ) : (
        products.map((el) => (
          <Animated.View
            key={el.id}
            layout={LinearTransition.springify()}
            entering={FadeIn}
            exiting={FadeOut.duration(200)}
          >
            <ProductItem
              icon={icon}
              text={el.text}
              onPressIcon={() => changeProductStatus(el.id)}
              onPressDelete={() => deleteProduct(el.id)}
            />
          </Animated.View>
        ))
      )}
    </Animated.ScrollView>
  )
}

const createStyles = (colors: IColors) =>
  ScaledSheet.create({
    noItemsText: {
      color: colors.textPrimary,
      fontSize: '14@ms',
      marginTop: '160@ms',
      textAlign: 'center',
    },
    pagerViewPage: {
      flex: 1,
      height: '100%',
      paddingHorizontal: '22@ms',
    },
  })

export default ProductList
