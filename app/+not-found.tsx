import { Text, View } from '@gluestack-ui/themed'
import { Link, Stack } from 'expo-router'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <View
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <Text
          sx={{
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'Poppins_600SemiBold',
          }}
        >
          This screen doesn't exist.
        </Text>

        <Link
          href='/'
          style={{
            marginTop: 15,
            paddingVertical: 15,
            fontFamily: 'Poppins_400Regular',
          }}
        >
          <Text
            sx={{
              fontSize: 14,
              fontFamily: 'Poppins_400Regular',
              color: '#2e78b7',
            }}
          >
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  )
}
