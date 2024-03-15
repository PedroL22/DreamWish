import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TamaguiProvider, View } from 'tamagui'
import '../../tamagui-web.css'
import { config } from '../../tamagui.config'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const insets = useSafeAreaInsets()

  return (
    <TamaguiProvider
      config={config}
      defaultTheme='light'
    >
      <ThemeProvider value={DefaultTheme}>
        <View style={{ paddingTop: insets.top }}>
          <StatusBar />
        </View>

        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{
              headerShown: false,
              statusBarTranslucent: true,
              statusBarStyle: 'dark',
              navigationBarColor: '#ffffff00',
            }}
          />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
