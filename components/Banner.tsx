import { type FC } from 'react'

import { Image, View } from '@gluestack-ui/themed'
import DefaultBanner from '~/assets/images/banner-default.png'

export const Banner: FC = () => {
  return (
    <View
      width='100%'
      flexDirection='row'
    >
      <Image
        source={DefaultBanner}
        alt='default banner'
        flex={1}
      />
    </View>
  )
}
