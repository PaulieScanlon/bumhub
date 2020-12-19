import React, { FunctionComponent, useState, useRef, Fragment } from 'react'
import { Container, Divider, Grid, Flex, Box, Heading, Text, Button, Radio, Label, Image, Link } from 'theme-ui'

import * as htmlToImage from 'html-to-image'

import theme from '../gatsby-plugin-theme-ui'
const { colors } = theme

import { Icon } from '../components/icon'
import { Starburst } from '../components/starburst'
import { LogoBrand } from '../components/logo-brand'
import { MakerBum } from '../components/maker-bum'
import { Seo } from '../components/seo'

import { IMakerConfigItem, IMakerConfigOption } from '../types'
import {
  NAME_OF_IMAGE,
  IMAGE,
  SWATCH,
  HEAD,
  FACE,
  ACCESSORIES,
  MISCELLANEOUS,
  TONE,
  SANTA,
  ELF,
  HEADPHONES,
  GLASSES,
  FRECKLES,
  STUBBLE,
  BEARD,
  FART,
  T_SHIRT,
  COFFEE,
  LAPTOP_SCREEN,
  LAPTOP_STICKERS,
} from '../const'

export const bumBumConfig = [
  {
    name: FACE,
    color: colors.secondary,
    options: [
      {
        label: 'none',
        value: 'noFace',
        checked: false,
        meta: {
          type: SWATCH,
          value: colors.secondary,
        },
      },
      {
        label: 'freckles',
        value: FRECKLES,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 'stubble',
        value: STUBBLE,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 'beard',
        value: BEARD,
        checked: true,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
    ],
  },
  {
    name: MISCELLANEOUS,
    color: colors.accent,
    options: [
      {
        label: 'none',
        value: 'noMiscellaneous',
        checked: true,
        meta: {
          type: SWATCH,
          value: colors.accent,
        },
      },
      {
        label: 'fart',
        value: FART,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 't-shirt',
        value: T_SHIRT,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
    ],
  },
  {
    name: HEAD,
    color: colors.midRed,
    options: [
      {
        label: 'none',
        value: 'noHead',
        checked: false,
        meta: {
          type: SWATCH,
          value: colors.midRed,
        },
      },
      {
        label: 'santa hat',
        value: SANTA,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 'elf hat',
        value: ELF,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 'headphones',
        value: HEADPHONES,
        checked: true,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 'glasses',
        value: GLASSES,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
    ],
  },

  {
    name: ACCESSORIES,
    color: colors.green,
    options: [
      {
        label: 'none',
        value: 'noAccessories',
        checked: false,
        meta: {
          type: SWATCH,
          value: colors.green,
        },
      },
      {
        label: 'coffee',
        value: COFFEE,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 'latop screen',
        value: LAPTOP_SCREEN,
        checked: false,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
      {
        label: 'latop stickers',
        value: LAPTOP_STICKERS,
        checked: true,
        meta: {
          type: IMAGE,
          value: '',
        },
      },
    ],
  },

  {
    name: TONE,
    color: colors.background,
    options: [
      ...colors.tone
        .map((item): string => item.mid)
        .map(
          (item: string, index: number): IMakerConfigOption => {
            return {
              label: `${index}`,
              value: `${index}`,
              checked: index === 4,
              meta: {
                type: SWATCH,
                value: item,
              },
            }
          },
        ),
    ],
  },
] as IMakerConfigItem[]

const BumBumMaker: FunctionComponent = () => {
  const captureRef = useRef()

  const [config, setConfig] = useState(bumBumConfig)

  const handleCapture = () => {
    const date = new Date()
    const minutes = date.getMinutes()
    const miliseconds = date.getMilliseconds()

    htmlToImage
      .toJpeg(captureRef.current, {
        quality: 0.95,
        pixelRatio: 1,
      })
      .then((dataUrl) => {
        var link = document.createElement('a')
        link.download = `${NAME_OF_IMAGE}-${minutes}-${miliseconds}.jpg`
        link.href = dataUrl
        link.click()
      })
  }

  const handleChange = (name: string, value: string) => {
    setConfig(
      config.map((item) => {
        if (item.name === name) {
          item.options.map((option) => option)
          return {
            ...item,
            name,
            options: [
              ...item.options.map((option) => {
                if (option.value === value) {
                  return {
                    ...option,
                    checked: true,
                  }
                } else {
                  return {
                    ...option,
                    checked: false,
                  }
                }
              }),
            ],
          }
        }
        return item
      }),
    )
  }

  return (
    <>
      <Seo title="Maker" />
      <Container>
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', '1fr', '3fr 1fr'],
          }}
        >
          <Box>
            <Heading as="h1" variant="styles.h1">
              Bum Bum Maker
            </Heading>
            <Text as="span" sx={{ fontWeight: 'bold' }}>
              Pick your bum. Download your bum. Share with the world.{' '}
              <Link href="https://twitter.com/search?q=%23SillySiteChallenge" target="_blank" rel="noopener">
                #SillySiteChallenge
              </Link>
            </Text>
          </Box>
          <Flex
            sx={{
              alignItems: 'flex-end',
              justifyContent: ['flex-start', 'flex-end'],
            }}
          >
            <Button onClick={handleCapture} sx={{ width: '100%' }}>
              Download bum
              <Icon name="fileDownload" sx={{ ml: 2 }} />
            </Button>
          </Flex>
        </Grid>

        <Divider />
        <Grid
          sx={{
            gridGap: 4,
            gridTemplateColumns: ['1fr', '1fr', '3fr 1fr', '3fr 1fr'],
          }}
        >
          <Box
            as="ul"
            sx={{
              backgroundColor: 'text',
              borderRadius: 0,
              px: 2,
              py: 3,
              ml: [2, 0],
              listStyle: 'none',
            }}
          >
            {config.map((item: IMakerConfigItem, index: number) => {
              const { name, color, options } = item
              return (
                <Fragment key={index}>
                  {options.map((option: IMakerConfigOption, index: number) => {
                    const { label, value, checked, meta } = option
                    return (
                      <Box
                        as="li"
                        sx={{
                          ml: '-40px',
                        }}
                      >
                        <Label
                          key={index}
                          htmlFor={value}
                          sx={{
                            display: 'block',
                            p: 2,
                          }}
                        >
                          <Flex
                            sx={{
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <Flex
                              sx={{
                                alignItems: 'center',
                              }}
                            >
                              <Box
                                sx={{
                                  backgroundColor: 'text',
                                  borderRadius: '100%',
                                  width: '54px',
                                  height: '54px',
                                  p: '6px',
                                }}
                              >
                                {meta.type === SWATCH ? (
                                  <Box
                                    sx={{
                                      backgroundColor: meta.value,
                                      borderRadius: '100%',
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  />
                                ) : (
                                  <Box
                                    sx={{
                                      backgroundColor: 'white',
                                      borderRadius: '100%',
                                      width: '100%',
                                      height: '100%',
                                      p: 1,
                                    }}
                                  >
                                    <Image src={`/images/${value}-bumnail.png`} />
                                  </Box>
                                )}
                              </Box>
                              <Text sx={{ color: color, ml: 3 }}>{label}</Text>
                            </Flex>
                            <Radio
                              id={value}
                              name={name}
                              value={value}
                              checked={checked}
                              onChange={() => {
                                handleChange(name, value)
                              }}
                            />
                          </Flex>
                        </Label>
                      </Box>
                    )
                  })}
                  <Divider />
                </Fragment>
              )
            })}
          </Box>
          <Box
            sx={{
              gridRow: 1,
              width: '100%',
              pt: '56.25%',
              position: ['relative', 'relative', 'relative', 'sticky'],
              maxHeight: '0vh',
              top: (theme) => [0, 0, 0, `${theme.space[6]}px`],
            }}
          >
            <Grid
              sx={{
                rowGap: 2,
              }}
            >
              <Box>
                <Box
                  ref={captureRef}
                  sx={{
                    backgroundColor: 'accent',
                    borderRadius: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    p: [3, 4, 3, 4],
                    position: 'absolute',
                  }}
                >
                  <Flex
                    sx={{
                      flexDirection: 'column',
                      height: '100%',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Flex
                      sx={{
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        flexGrow: 1,
                      }}
                    >
                      <Heading
                        as="h2"
                        variant="styles.h2"
                        sx={{
                          textAlign: 'center',
                          fontSize: [2, 5, 6, 7],
                          lineHeight: 0.8,
                        }}
                      >
                        BumHub
                      </Heading>
                      <Text sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: ['0.7rem', 1, 1, 1] }}>
                        The cheekiest way to explore GitHub
                      </Text>
                    </Flex>
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        position: 'absolute',
                        overflow: 'hidden',
                        zIndex: 0,
                      }}
                    >
                      <Flex
                        sx={{
                          justifyContent: 'flex-end',
                          flexDirection: 'column',
                          height: '100%',
                        }}
                      >
                        <MakerBum config={config} sx={{ width: ['38%', '43%', '50%'] }} />
                        <Text
                          sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: ['0.5rem', 0],
                            lineHeight: 1.4,
                          }}
                        >
                          https://bumhub.netlify.app
                        </Text>
                      </Flex>
                    </Box>
                    <Flex
                      sx={{
                        justifyContent: 'flex-start',
                      }}
                    >
                      <LogoBrand sx={{ mt: 2, mx: 0, width: ['45px', '60px', '80px'] }} />
                    </Flex>
                  </Flex>
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      position: 'absolute',
                      overflow: 'hidden',
                      zIndex: 0,
                    }}
                  >
                    <Starburst />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Divider />
      </Container>
    </>
  )
}

export default BumBumMaker
