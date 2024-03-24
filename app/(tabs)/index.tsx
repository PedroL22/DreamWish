import React from 'react'

import { ShareIcon, View } from '@gluestack-ui/themed'
import { Banner, UserProfile } from '~/components'

export default function TabOneScreen() {
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
      </View>
    </View>
  )
}
