import { Image, Text, View } from '@gluestack-ui/themed'

import ProfilePicDefault from '~/assets/images/profile-pic-default.jpg'

import { fakeData } from '~/@fakeData'

export const UserProfile = () => {
  const { user } = fakeData()

  return (
    <View
      width='100%'
      flexDirection='row'
      alignItems='center'
      gap='$3'
    >
      <Image
        source={ProfilePicDefault}
        alt='default profile picture'
        borderRadius={256}
        width={64}
        height={64}
      />

      <View>
        <Text fontFamily='Poppins_600SemiBold'>{user.name}</Text>

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
