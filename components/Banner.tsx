import { Image, View } from '@gluestack-ui/themed'
import React from 'react'

import BannerDefault from '~/assets/images/banner-default.png'

export const Banner = () => {
  return (
    <View
      width='100%'
      flexDirection='row'
    >
      <Image
        source={BannerDefault}
        alt='default banner'
        flex={1}
      />
    </View>
  )
}
