import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Image, Text, View } from 'tamagui'

import { fakeData } from '~/@fakeData'

export const Profile = () => {
  const { user } = fakeData()

  return (
    <View
      width='100%'
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <View
        flexDirection='row'
        alignItems='center'
        gap='$4'
      >
        <Image
          source={{
            uri: user.profilePicture,
            width: 75,
            height: 75,
          }}
          style={{
            objectFit: 'cover',
            width: 75,
            height: 75,
            borderRadius: 75,
          }}
        />

        <View>
          <Text
            fontSize='$6'
            fontWeight='bold'
          >
            {user.name}
          </Text>

          <Text>@{user.userName}</Text>
        </View>
      </View>

      <FontAwesome
        size={28}
        name='share-alt'
      />
    </View>
  )
}
