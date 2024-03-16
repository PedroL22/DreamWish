import { View } from 'tamagui'
import { Banner, Profile } from '~/components/home'

export default function HomeScreen() {
  return (
    <View
      flex={1}
      alignItems='center'
    >
      <Banner />

      <View
        width='100%'
        px='$6'
        py='$4'
      >
        <Profile />
      </View>
    </View>
  )
}
