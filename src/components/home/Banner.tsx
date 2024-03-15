import { Image, View } from 'tamagui'

import BannerDefaultImage from '../../assets/images/banner-default.png'

export const Banner = () => {
  return (
    <View
      maxHeight={97}
      width='100%'
    >
      <Image
        source={{
          uri: BannerDefaultImage,
          width: 350,
          height: 97,
        }}
        style={{
          objectFit: 'cover',
          width: '100%',
        }}
      />
    </View>
  )
}
