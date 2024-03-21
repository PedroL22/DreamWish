import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, StatusBar, View } from '@gluestack-ui/themed'
import { Colors } from '~/constants/Colors'

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
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError
  }, [fontsError])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const insets = useSafeAreaInsets()

  return (
    <GluestackUIProvider config={config}>
      <ThemeProvider value={DefaultTheme}>
        <View style={{ paddingTop: insets.top }}>
          <StatusBar
            animated={true}
            backgroundColor={Colors.light.secondaryColor}
          />
        </View>

        <Stack>
          <Stack.Screen
            name='(tabs)'
            options={{ headerShown: false }}
          />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  )
}
