/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FunctionComponent, HTMLAttributes } from 'react'
import { SxStyleProp } from 'theme-ui'
import { paths } from './paths'

export interface IIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  /** The icon name from paths */
  name: string
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const Icon: FunctionComponent<IIconProps> = ({ name, sx }) => {
  return (
    <svg
      version="1.0"
      fill="currentcolor"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
      sx={{
        color: 'inherit',
        width: 24,
        height: 24,
        ...sx,
      }}
    >
      <path d={paths[name].path} fill="currentcolor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}
