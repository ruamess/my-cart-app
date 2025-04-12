import { useRef, useState } from 'react'
import { View } from 'react-native'
import PagerView from 'react-native-pager-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScaledSheet } from 'react-native-size-matters'

import Header from 'components/Header'
import ProductList from 'components/ProductList'
import TabBar from 'components/TabBar'
import useThemeColors from 'hooks/useThemeColors'
import Pending from 'icons/Pending'
import Purchased from 'icons/Purchased'
import { IColors } from 'shared/interfaces'
import { useGlobalStore } from 'shared/store'

const Home = () => {
  const insets = useSafeAreaInsets()

  const cartProducts = useGlobalStore((state) => state.cartProducts)

  const pendingItems = () => cartProducts.filter((item) => item.status === 'pending')
  const purchasedItems = () => cartProducts.filter((item) => item.status === 'purchased')

  const [currentPage, setCurrentPage] = useState(0)
  const pagerRef = useRef<React.ElementRef<typeof PagerView>>(null)

  const changePage = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page)
      pagerRef.current?.setPage(page)
    }
  }

  const colors = useThemeColors()
  const styles = createStyles(colors)

  return (
    <View style={styles.container}>
      <Header currentPage={currentPage} changePage={changePage} />

      <View style={[styles.content, { paddingBottom: insets.bottom }]}>
        <TabBar currentPage={currentPage} changePage={changePage} />

        <PagerView
          style={styles.pager}
          initialPage={0}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
          ref={pagerRef}
          scrollEnabled={false}
        >
          <ProductList key={0} icon={<Pending />} products={pendingItems()} />

          <ProductList key={1} icon={<Purchased />} products={purchasedItems()} />
        </PagerView>
      </View>
    </View>
  )
}

const createStyles = (colors: IColors) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      gap: '25@ms',
      paddingTop: '30@ms',
      position: 'relative',
    },
    content: {
      backgroundColor: colors.backgroundSurface,
      borderTopLeftRadius: '24@ms',
      borderTopRightRadius: '24@ms',
      flex: 1,
      paddingTop: '10@ms',
    },
    pager: {
      flex: 1,
    },
  })

export default Home
