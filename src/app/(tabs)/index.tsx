import { Text, View } from 'tamagui'
import { env } from '../../env'

export default function TabOneScreen() {
  console.log(env)

  return (
    <View
      flex={1}
      alignItems='center'
    >
      <Text fontSize={20}>Tab One</Text>
    </View>
  )
}
