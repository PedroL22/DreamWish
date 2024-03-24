import { FC } from 'react'

import { Image, Text, View } from '@gluestack-ui/themed'
import DefaultWishlistCover from '~/assets/images/wishlist-cover-default.jpg'

interface WishlistProps {
  name: string
  productQuantity: number
}

export const Wishlist: FC<WishlistProps> = ({ name, productQuantity }) => {
  return (
    <View
      width='100%'
      height='100%'
      my='$3'
    >
      <View
        justifyContent='center'
        alignSelf='center'
      >
        <Image
          source={DefaultWishlistCover}
          alt={`${name} cover picture`}
          width={175}
          height={175}
          objectFit='cover'
          borderRadius={16}
        />

        <Text
          fontFamily='Poppins_600SemiBold'
          fontSize={16}
          mt='$2'
        >
          {name}
        </Text>

        <Text
          fontFamily='Poppins_300Light'
          fontSize={12}
        >
          {productQuantity} {productQuantity === 1 ? 'product' : 'products'}
        </Text>
      </View>
    </View>
  )
}
