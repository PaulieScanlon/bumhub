import React, { FunctionComponent } from 'react'
import { Flex, Box, Text } from 'theme-ui'

interface IEcoStatProps {
  /** The statistic to display */
  statistic: string
}

export const EcoStat: FunctionComponent<IEcoStatProps> = ({ statistic }) => {
  return (
    <Flex
      sx={{
        borderRadius: '100%',
        backgroundColor: 'blueGreen',
        borderWidth: 14,
        borderColor: 'accent',
        borderStyle: 'solid',
        width: 180,
        height: 180,
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <Text
          sx={{
            fontSize: '2rem',
            fontWeight: 'heading',
            color: 'background',
            mb: 1,
            textAlign: 'center',
          }}
        >
          {statistic}
        </Text>
      </Flex>
    </Flex>
  )
}
