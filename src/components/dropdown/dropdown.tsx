import React, { FunctionComponent, Fragment, ReactElement } from 'react'
import { transparentize } from '@theme-ui/color'
import { Menu, MenuButton, MenuList, MenuLink } from '@reach/menu-button'
import '@reach/menu-button/styles.css'

import { Flex, NavLink, SxStyleProp } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import { INavigationItem } from '../../types'

interface IDropdownProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
  /** Trigger element */
  trigger: ReactElement
  /** Items to render in menu-list */
  items: INavigationItem[]
}

export const Dropdown: FunctionComponent<IDropdownProps> = ({ trigger, items, sx }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        ...sx,
        '[data-reach-menu-button]': {
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: 0,
          display: 'inline-flex',
          ':focus': {
            outline: 'none',
            boxShadow: 'focus',
          },
        },
        '[data-reach-menu][data-reach-menu-popover]': {
          position: 'absolute',
          top: '54px',
          right: 0,
          '[data-reach-menu-list]': {
            border: 'none',
            borderRadius: 0,
            boxShadow: 'surface',
            px: 3,
            '[data-reach-menu-link]': {
              display: 'flex',
              variant: 'links.nav',
              py: 1,
              '&[data-selected]': {
                backgroundColor: transparentize('text', 0.95),
              },
            },
          },
        },
      }}
    >
      <Menu>
        <MenuButton>{trigger}</MenuButton>
        <MenuList portal={false}>
          {items.map((item: INavigationItem, index: number) => {
            const { name, url, to } = item
            return (
              <Fragment key={index}>
                {url ? (
                  <MenuLink href={url} target="_blank" rel="noopener">
                    {name}
                  </MenuLink>
                ) : (
                  <MenuLink key={index} as={GatsbyLink} to={to}>
                    {name}
                  </MenuLink>
                )}
              </Fragment>
            )
          })}
        </MenuList>
      </Menu>
    </Flex>
  )
}
