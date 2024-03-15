import { View } from 'tamagui'
import { Banner } from '~/components/home'

export default function HomeScreen() {
  return (
    <View
      flex={1}
      alignItems='center'
    >
      <Banner />
    </View>
  )
}
