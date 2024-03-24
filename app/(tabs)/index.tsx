import React from 'react'

import { View } from '@gluestack-ui/themed'
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
        <UserProfile />
      </View>
    </View>
  )
}
