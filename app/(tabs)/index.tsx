import { Text, View } from '@gluestack-ui/themed'
import React from 'react'

export default function TabOneScreen() {
  return (
    <View
      sx={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        sx={{
          fontSize: 20,
          fontWeight: '600',
          fontFamily: 'Poppins_600SemiBold',
        }}
      >
        Tab One
      </Text>
    </View>
  )
}
