import React, { FunctionComponent } from 'react'
import { Flex, Box, Heading, Card, Text } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import { commonFocus } from '../../gatsby-plugin-theme-ui'

interface IAdventCardProps {
  /** The day of the December */
  day: number
  /** The name of the repository */
  repoName: string
  /** Sets styles if day is current */
  isToday: boolean
  /** Sets styles if day is disabled */
  isDisabled: boolean
  /** Gatsby Link 'to' path */
  to: string
}

export const AdventCard: FunctionComponent<IAdventCardProps> = ({ day, repoName, isToday, isDisabled, to }) => {
  const AdventChild = () => {
    return (
      <Card
        sx={{
          color: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          minHeight: '200px',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          <Heading as="h4" variant="styles.h4" sx={{ color: 'inherit' }}>
            {day}
          </Heading>
          {isDisabled ? null : <Text sx={{ color: 'inherit' }}>{repoName}</Text>}
        </Flex>

        {isDisabled ? null : (
          <Flex
            sx={{
              justifyContent: 'flex-end',
            }}
          >
            <Text>More info</Text>
          </Flex>
        )}
      </Card>
    )
  }

  return (
    <Box
      sx={{
        color: isToday ? 'primary' : isDisabled ? 'grey' : 'black',
        a: {
          display: 'flex',
          color: 'inherit',
          textDecoration: 'none',
          ':focus': {
            ...commonFocus,
            outlineColor: 'accent',
          },
        },
      }}
    >
      {isDisabled ? (
        <>{AdventChild()}</>
      ) : (
        <GatsbyLink to={to}>
          <>{AdventChild()}</>
        </GatsbyLink>
      )}
    </Box>
  )
}
