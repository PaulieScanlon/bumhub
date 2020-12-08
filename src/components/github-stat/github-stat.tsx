import React, { FunctionComponent } from 'react'
import { Flex, Grid, Box, Text } from 'theme-ui'
import { Icon } from '../icon'

interface IGitHubStatProps {
  /** The description of the statistic */
  description: string
  /** The statistic value */
  value: string | number
  /** The colour value from theme */
  color: string
  /** The icon name to use */
  icon: string
}

export const GitHubStat: FunctionComponent<IGitHubStatProps> = ({ description, value, color, icon }) => {
  return (
    <Grid
      sx={{
        alignItems: 'center',
        gridTemplateColumns: 'auto 1fr',
        columnGap: 2,
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          backgroundColor: 'text',
          borderRadius: '100%',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
        }}
      >
        <Icon name={icon} sx={{ color: color }} />
      </Flex>
      <Box
        sx={{
          lineHeight: 'heading',
        }}
      >
        <Text sx={{ fontSize: 0, color: 'background', lineHeight: 'inherit' }}>{description}</Text>
        <Text sx={{ color: color, lineHeight: 'inherit' }}>{value ? value : 'n/a'}</Text>
      </Box>
    </Grid>
  )
}
