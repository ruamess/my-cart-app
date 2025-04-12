import { StrictMode, useCallback, useEffect, useState } from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'

import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import useThemeColors from 'hooks/useThemeColors'

import 'i18n'

SplashScreen.preventAutoHideAsync()
SplashScreen.setOptions({ duration: 200, fade: true })

const RootLayout = () => {
  const [appIsReady, setAppIsReady] = useState(false)

  const deviceTheme = useColorScheme()
  const insets = useSafeAreaInsets()
  const colors = useThemeColors()

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 200))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) return null

  return (
    <StrictMode>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style={deviceTheme === 'dark' ? 'light' : 'dark'} />
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              navigationBarColor: colors.backgroundSurface,
              headerShown: false,
              contentStyle: {
                paddingTop: insets.top,
                backgroundColor: colors.backgroundPrimary,
              },
            }}
          />
        </SafeAreaProvider>
      </View>
    </StrictMode>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default RootLayout
