import { ShareIcon, Text, View } from '@gluestack-ui/themed'
import { Banner, UserProfile } from '~/components'

import { FlashList } from '@shopify/flash-list'
import { fakeData } from '~/@fakeData'
import { Wishlist } from '~/components/Wishlist'

export default function HomeScreen() {
  const { wishlists } = fakeData()

  return (
    <View flex={1}>
      <Banner />

      <View
        flex={1}
        px='$5'
        py='$3'
      >
        <View
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <UserProfile />

          <ShareIcon size='lg' />
        </View>

        <View
          flex={1}
          width='100%'
          mt='$3'
        >
          <Text
            fontFamily='Poppins_600SemiBold'
            fontSize={32}
          >
            Wishlists
          </Text>

          <View
            flex={1}
            width='100%'
            gap='$3'
          >
            <FlashList
              data={wishlists}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Wishlist
                  key={item.id}
                  name={item.name}
                  productQuantity={item.productQuantity}
                />
              )}
              estimatedItemSize={8}
              numColumns={2}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
