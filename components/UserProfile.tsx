import { type FC } from 'react'

import { Image, Text, View } from '@gluestack-ui/themed'
import DefaultProfilePic from '~/assets/images/profile-pic-default.jpg'

import { fakeData } from '~/@fakeData'

export const UserProfile: FC = () => {
  const { user } = fakeData()

  return (
    <View
      flexDirection='row'
      alignItems='center'
      gap='$3'
    >
      <Image
        source={DefaultProfilePic}
        alt='default profile picture'
        width={64}
        height={64}
        objectFit='cover'
        borderRadius={256}
      />

      <View>
        <Text
          fontFamily='Poppins_600SemiBold'
          fontSize={16}
        >
          {user.name}
        </Text>

        <Text
          fontFamily='Poppins_300Light'
          fontSize={12}
        >
          @{user.userName}
        </Text>
      </View>
    </View>
  )
}
