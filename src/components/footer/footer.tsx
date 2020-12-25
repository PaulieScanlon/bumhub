import React, { FunctionComponent } from 'react'
import { Grid, Box, Container, Text, Link, Divider } from 'theme-ui'

interface IFooterProps {}

interface ILinkObject {
  /** The title of the link */
  title: string
  /** The text to display */
  child: string
  /** The url of the link */
  link: string
}

const leftLinks: ILinkObject[] = [
  {
    title: 'Illustrator',
    child: ' @Miss_ChatZ',
    link: 'https://twitter.com/Miss_ChatZ',
  },
  {
    title: 'Designer',
    child: ' @PaulieScanlon',
    link: 'https://twitter.com/PaulieScanlon',
  },
  {
    title: 'Front End Developer',
    child: ' @PaulieScanlon',
    link: 'https://twitter.com/PaulieScanlon',
  },
  {
    title: 'Back End Developer',
    child: ' @PaulieScanlon',
    link: 'https://twitter.com/PaulieScanlon',
  },
]

const rightLinks: ILinkObject[] = [
  {
    title: 'Scott Spence',
    child: ' @spences10',
    link: 'https://twitter.com/spences10',
  },
  {
    title: 'Rich Haines',
    child: ' @studio_hungry',
    link: 'https://twitter.com/studio_hungry',
  },
  {
    title: 'Benedicte Raae',
    child: '@raae',
    link: 'https://twitter.com/raae',
  },
  {
    title: 'Fabio Rosado',
    child: '@FabioRosado_',
    link: 'https://twitter.com/FabioRosado_',
  },
  {
    title: 'Gabriela.codes',
    child: '@nohinder',
    link: 'https://twitter.com/nohinder',
  },
]

export const Footer: FunctionComponent<IFooterProps> = () => {
  return (
    <Box
      as="footer"
      sx={{
        backgroundColor: 'text',
        py: 4,
      }}
    >
      <Container>
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr'],
            color: 'background',
            px: 3,
          }}
        >
          <Grid
            sx={{
              gridGap: 2,
            }}
          >
            <Text variant="styles.h6" sx={{ color: 'inherit', lineHeight: 'heading' }}>
              <Box as="span" role="img" aria-label="Sparkles">
                ✨
              </Box>{' '}
              Credits
            </Text>
            <Text sx={{ fontSize: 0, color: 'midGrey' }}>Who made Bum Hub and what they did</Text>
            <Box as="ul" variant="styles.ul">
              {leftLinks.map((item: ILinkObject, index: number) => {
                const { title, child, link } = item
                return (
                  <Box key={index} as="li" variant="styles.li">
                    {`${title}: `}
                    <Link href={link} target="_blank" rel="noopener">
                      {child}
                    </Link>
                  </Box>
                )
              })}
            </Box>
          </Grid>
          <Box>
            <Grid
              sx={{
                gridGap: 2,
              }}
            >
              <Text variant="styles.h6" sx={{ color: 'inherit', lineHeight: 'heading' }}>
                <Box as="span" role="img" aria-label="Folded Hands">
                  🙏
                </Box>{' '}
                Thanks
              </Text>
              <Text sx={{ fontSize: 0, color: 'midGrey' }}>
                Thanks to my online friends who encourange, support and retweet my stuff
              </Text>
              <Box as="ul" variant="styles.ul">
                {rightLinks.map((item: ILinkObject, index: number) => {
                  const { title, child, link } = item
                  return (
                    <Box key={index} as="li" variant="styles.li">
                      {`${title}: `}
                      <Link href={link} target="_blank" rel="noopener">
                        {child}
                      </Link>
                    </Box>
                  )
                })}
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Divider />
        <Text
          sx={{
            display: 'block',
            color: 'midGrey',
            fontSize: 0,
            px: 3,
          }}
        >
          More of my work can be found on my{' '}
          <Link
            aria-label="Paul Scanlon Blog"
            href="https://paulie.dev/"
            target="_blank"
            rel="noopener"
            sx={{ color: 'shadowAccent' }}
          >
            blog
          </Link>
        </Text>
      </Container>
    </Box>
  )
}
