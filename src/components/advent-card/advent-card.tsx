import React, { FunctionComponent } from 'react'
import { Flex, Box, Card, Text } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import theme from '../../gatsby-plugin-theme-ui'

import { Icon } from '../icon'
import { PantsUp } from '../pants-up'
import { PantsDown } from '../pants-down'
import { Reef } from '../reef'
import { Mistletoe } from '../mistletoe'

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
          position: 'relative',
          color: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          backgroundColor: isToday ? 'midRed' : 'background',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            left: 0,
            width: '100%',
          }}
        >
          {isToday ? <Reef sx={{ width: 78, mt: '-2px' }} /> : isDisabled ? null : <Mistletoe sx={{ width: 60 }} />}
        </Box>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 10,
            left: 10,
            width: 48,
            height: 48,
            borderRadius: '50%',
            backgroundColor: isToday ? 'background' : 'darkRed',
          }}
        >
          <Text sx={{ color: isToday ? 'darkRed' : 'white', fontSize: 3, fontWeight: 'heading', textAlign: 'center' }}>
            {day}
          </Text>
        </Flex>
        <Box
          sx={{
            mt: 4,
            py: 3,
          }}
        >
          {isDisabled ? (
            <Text sx={{ fontWeight: 'heading', textAlign: 'center', mb: 3 }}>?</Text>
          ) : (
            <>
              <Text
                sx={{
                  color: isToday ? 'background' : 'text',
                  fontWeight: 'heading',
                  textAlign: 'center',
                  fontSize: 2,
                }}
              >
                {repoName}
              </Text>
              <Flex
                sx={{
                  color: isToday ? 'text' : 'darkRed',
                  justifyContent: 'center',
                }}
              >
                <Flex
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Text
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      color: 'inherit',
                      fontWeight: 'heading',
                      textAlign: 'center',
                      lineHeight: 'normal',
                    }}
                  >
                    Explore
                  </Text>
                  <Icon name="keyboardRight" sx={{ widht: 22, height: 22 }} />
                </Flex>
              </Flex>
            </>
          )}
        </Box>
        <Box>
          {isDisabled ? (
            <PantsUp />
          ) : (
            <PantsDown shadowColor={isToday ? theme.colors.darkRed : theme.colors.shadowBlue} />
          )}
        </Box>
      </Card>
    )
  }

  return (
    <Box
      sx={{
        a: {
          color: 'inherit',
          display: 'flex',
          textDecoration: 'none',
          height: '100%',
          transition: '.2s linear outline, .2s linear box-shadow, .2s ease-in-out transform',
          ':hover': {
            transform: 'translateY(-0.25rem)',
            boxShadow: 'surface',
          },
          ':focus': {
            boxShadow: 'focus',
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
