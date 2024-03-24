import { Text, View } from '@gluestack-ui/themed'

export default function TabTwoScreen() {
  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          fontSize: 20,
          fontWeight: '600',
          fontFamily: 'Poppins_600SemiBold',
        }}
      >
        Tab Two
      </Text>
    </View>
  )
}
