import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

interface IPantsUpProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
  /** The color of the shadow */
  shadowColor?: string
}

export const PantsUp: FunctionComponent<IPantsUpProps> = ({ shadowColor = '#EEEEEE', sx }) => {
  return (
    <Box sx={{ margin: '0 auto', ...sx }}>
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 471.6 329.7" width="100%" height="100%">
        <ellipse fill={shadowColor} cx="230" cy="292" rx="124.1" ry="11.7" />
        <g>
          <path d="M335.6,284.9l-48-20.8l-11-0.8c0,0-6,17.6-6.5,23.6C308.6,288.9,335.6,284.9,335.6,284.9z" />
          <path
            d="M308.4,268.5c4.7-37.9-4-65.1-12.2-81.2c-11-21.7-24.8-32-26.3-33.2l-8.1-5.9l-10.3,14.2l-10.3,14.1l8,5.8
		c0.6,0.5,9.2,7.4,16.1,21.4c8.7,17.6,11.4,38.7,8,62.6l-1.7,12.3l12.4-1c1.4-0.1,2.8-0.2,4.2-0.3c3.4-0.2,6.8-0.2,10-0.2l9,0.2
		L308.4,268.5z"
          />
          <path
            fill="#FF4A4A"
            d="M283.2,267.8c3.7-25.9,0.7-48.9-9-68.4c-8.4-17-19-24.9-19.1-25l4.4-6.1l4.4-6.1
		c0.5,0.4,13.2,9.7,23.2,29.6c7.9,15.5,15.5,40.6,11.2,75.5C293.4,267.2,288.3,267.4,283.2,267.8z"
          />
          <path
            fill="#FFFFFF"
            d="M292.8,279.6c0.3,0,0.7-0.1,1-0.1c2.2-0.3,3.9-1.2,5-1.9c1.1-0.8,2-1.8,2.5-2.8c0.1-0.2,0.2-0.4,0.2-0.7
		l0.3-1.4l1.2,0.8c1.1,0.7,2.2,1.3,3.4,1.6c1.2,0.4,2.6,0.5,3.9,0.4c1.2-0.1,2.4-0.3,3.5-0.8c2.6-1,4.8-3,5.9-5.5
		c0.6-1.3,0.9-2.7,0.9-4c0-1.3-0.3-2.5-0.8-3.6c-0.5-1.1-1.3-2.1-2.2-2.9l-1.2-0.9l1.3-0.7c0.8-0.4,1.5-1,2.1-1.6
		c1.8-1.9,2.7-4.5,2.4-7.2c-0.2-1.4-0.8-3-1.8-4.1c-0.9-1.1-2.1-1.9-3.5-2.5c-1.2-0.5-2.4-0.7-3.7-0.8c-0.3,0-0.6,0-0.9,0
		c-0.8,0-1.6,0.2-2.4,0.4c-1.6,0.4-3,1.1-4.2,2c-0.2,0.2-0.4,0.4-0.6,0.5L304,245l-0.5-1.5c-0.3-1-0.8-1.9-1.3-2.7
		c-0.7-1.2-1.6-2.2-2.6-3c-0.4-0.4-0.9-0.7-1.5-1.1l-0.3-0.2l-0.2-0.1c-0.6-0.3-1.1-0.6-1.7-0.8c-0.6-0.3-1.3-0.4-2-0.6l-0.3-0.1
		l-0.1,0c-0.7-0.1-1.4-0.2-2.1-0.2c-0.3,0-0.6,0-0.9,0c-1.2,0.1-2.4,0.3-3.5,0.7c-2.4,0.8-4.7,2.3-6.4,4.3c-1.8,2.2-2.3,4.3-2.4,5.1
		c0,0.1-0.2,2.6-0.2,2.6l-1.5-1.8c-0.7-0.9-1.5-1.6-2.5-2.2c-1.2-0.8-3.8-2.2-7.2-2c-0.3,0-0.7,0.1-1,0.1c-1.2,0.2-3,0.7-4.5,2
		c-1.3,1.1-2.2,2.6-2.7,4.3c-0.4,1.5-0.5,3-0.2,4.6c0.1,0.7,0.3,1.4,0.6,2c0.3,0.6,0.6,1.2,0.9,1.7c1,1.6,2.3,2.8,3.8,3.7l1.2,0.7
		l-1.1,0.9c-0.8,0.7-1.5,1.6-2,2.6c-0.6,1.2-0.9,2.7-0.7,4.1c0.1,1.5,0.6,2.9,1.3,4.2c1.5,2.5,3.9,4.5,6.7,5.4
		c1.5,0.5,3.2,0.7,4.9,0.6l0,0c0.9,0,1.8-0.2,2.7-0.4c2.5-0.6,4.1-1.7,4.8-2.2c0.2-0.1,0.3-0.2,0.4-0.4l0.8-0.7l0.7,0.8
		c0.8,1,2.1,2.3,4.2,3.2C289.3,279.4,291.1,279.7,292.8,279.6z"
          />
          <path
            fill="#C2D8FF"
            d="M261.7,272.9c-0.8-1.4-1.3-3-1.5-4.7c-0.1-1.6,0.2-3.3,0.8-4.7c0.6-1.2,1.4-2.1,2.2-2.9
		c-0.9-0.5-2-1.3-3-2.5c8.5-5,14.7-0.2,14.7-0.2s-5,7.1,1.1,9.1c6.1,2,6.9-5.5,6.9-5.5s0.1,6.7,8.5,8c8.4,1.2,8.5-6.8,8.5-6.8
		s4.6,5.7,9.5,3.2c4.9-2.6,1.7-7.2,1.7-7.2l7.6-0.9c-0.1,0.1-0.3,0.2-0.4,0.3c1,0.8,1.9,1.8,2.5,3.2c0.5,1.1,0.9,2.5,0.9,4
		c0,1.5-0.3,3-1,4.4c-1.3,2.8-3.7,4.9-6.4,6c-2.8,1.1-5.7,1-8,0.3c-1.5-0.4-2.7-1.1-3.7-1.8c-0.1,0.3-0.2,0.6-0.3,0.9
		c-0.5,1-1.4,2.2-2.9,3.2c-1.4,1-3.3,1.8-5.4,2.1c-2.1,0.3-4.4,0-6.5-0.8c-1.9-0.8-3.5-2.1-4.6-3.5c-0.2,0.2-0.3,0.3-0.5,0.5
		c-1.1,0.9-2.9,1.8-5.2,2.4c-2.3,0.6-5.2,0.7-8.2-0.3C266,277.8,263.4,275.7,261.7,272.9z"
          />
          <path
            d="M257.5,252.5c0.2,0.8,0.4,1.5,0.7,2.2c0.3,0.7,0.6,1.3,1,1.9c1.3,2,2.9,3.3,4.2,4c-0.8,0.7-1.6,1.7-2.2,2.9
		c-0.7,1.3-1,3.1-0.8,4.7c0.1,1.6,0.7,3.2,1.5,4.7c1.7,2.8,4.3,4.9,7.3,5.9c3,1,5.9,0.8,8.2,0.3c2.3-0.6,4-1.5,5.2-2.4
		c0.2-0.2,0.4-0.3,0.5-0.5c1.1,1.4,2.7,2.7,4.6,3.5c2,0.9,4.4,1.2,6.5,0.8c2.1-0.3,4-1.1,5.4-2.1c1.4-1,2.4-2.2,2.9-3.2
		c0.2-0.3,0.3-0.6,0.3-0.9c1,0.7,2.3,1.4,3.7,1.8c2.3,0.7,5.2,0.8,8-0.3c2.7-1.1,5.2-3.2,6.4-6c0.6-1.4,1-2.9,1-4.4
		c0-1.5-0.4-2.9-0.9-4c-0.7-1.4-1.6-2.5-2.5-3.2c0.8-0.4,1.6-1,2.3-1.8c1.8-1.9,3-4.7,2.7-8c-0.2-1.6-0.9-3.3-2-4.6
		c-1.1-1.3-2.5-2.2-3.9-2.8c-1.4-0.6-2.8-0.8-4.1-0.8c-1.3,0-2.5,0.2-3.6,0.4c-2.1,0.6-3.6,1.4-4.5,2.1c-0.3,0.2-0.5,0.4-0.7,0.6
		c-0.3-1-0.8-2-1.4-3c-0.7-1.1-1.6-2.3-2.8-3.2c-0.5-0.5-1.2-0.9-1.8-1.3c-0.7-0.4-1.4-0.8-2.1-1c-0.7-0.3-1.5-0.5-2.3-0.7
		c-0.8-0.1-1.6-0.2-2.4-0.2c-1.6,0-3.2,0.2-4.6,0.7c-2.9,0.9-5.2,2.8-6.8,4.6c-1.6,1.9-2.4,4-2.7,5.5c0,0.1,0,0.2,0,0.4
		c-0.7-0.9-1.6-1.7-2.7-2.4c-2.3-1.5-5.5-2.6-8.9-2.1c-1.7,0.2-3.5,0.9-5,2.2c-1.5,1.3-2.6,3.1-3,4.8
		C257.2,249.3,257.2,251,257.5,252.5z M266.3,259c-0.3-0.5-0.8-1.1-1.4-2c-0.7-1.1-1.6-2.7-1.8-4.4c-0.2-1.6,0.2-3.6,1.2-4.6
		c0.5-0.5,1-0.8,1.8-1c0.7-0.2,1.6-0.3,2.5-0.2c1.8,0.1,3.4,0.9,4.7,1.8c1.3,0.9,2.3,2,3,2.9c0.7,0.9,1.2,1.6,1.7,1.9
		c0.5,0.3,1,0.2,1.5-0.8c0.4-1,0.5-2.6-0.2-4.5c-0.1-0.2-0.2-0.4-0.3-0.6c0.2-0.2,0.5-0.4,0.8-0.7c0.2-0.2,0.4-0.5,0.7-0.8
		c0.3-0.4,0.6-0.8,1.1-1.3c0.8-1,2.1-2.2,3.7-3.1c1.6-0.9,3.5-1.6,5.4-1.6c1.9-0.1,3.7,0.5,5.2,1.4c1.5,1,2.8,2.4,3.6,3.7
		c0.9,1.4,1.3,2.7,1.7,3.8c0.3,1.1,0.5,1.9,0.9,2.3c0.4,0.4,0.9,0.5,1.6-0.2c0.8-0.7,1.4-2.2,1.4-4.2c0-0.4,0-0.8-0.1-1.3
		c0.1,0,0.2,0,0.3,0.1c0.4,0.1,1.4,0,2.6-0.2c1.2-0.1,2.8-0.3,4.3-0.1c1.5,0.2,3.1,0.8,4,1.8c0.4,0.5,0.7,1,0.8,1.5
		c0.1,0.5,0.1,1.1,0,1.8c-0.1,0.6-0.4,1.2-0.7,1.8c-0.1,0.3-0.3,0.5-0.5,0.7c-0.2,0.2-0.4,0.5-0.6,0.7c-0.9,0.9-2,1.5-2.9,2.1
		c-0.9,0.6-1.6,1-1.9,1.5c-0.3,0.5-0.1,1,0.7,1.5c0.7,0.4,1.7,0.6,3,0.5c0.3,0.4,0.7,0.9,1.2,1.6c0.5,0.9,1,2.3,0.9,3.6
		c-0.1,1.3-0.7,2.7-1.8,3.8c-1.1,1.1-2.6,1.8-4.1,2.1c-1.5,0.2-3.1,0.1-4.5-0.3c-0.7-0.2-1.4-0.4-2-0.6c-0.5-0.2-1-0.4-1.5-0.6
		c-0.7-0.3-0.8-0.1-1.3-0.1c-0.4,0-1-0.2-1.5,0.6c-0.2,0.4-0.2,1,0,1.7c0.2,0.6,0.6,1.1,1,1.6c-0.7,0.1-2.5,1.3-4.9,1.7
		c-1.2,0.2-2.5,0.3-3.7,0.1c-1.2-0.2-2.4-0.6-3.4-1.3c-1-0.6-1.9-1.4-2.5-2.2c-0.7-0.8-1.2-1.5-1.6-2.1c-0.5-0.6-0.8-1.1-1.3-1.2
		c-0.5-0.2-1-0.1-1.5,0.6c-0.5,0.7-0.9,1.8-0.7,3.2c0.1,0.7,0.2,1.4,0.5,2.2c-0.5,0.1-1.2,0.2-2,0.3c-1.3,0.2-3,0.4-4.8,0.2
		c-0.9-0.1-1.8-0.3-2.7-0.6c-0.9-0.3-1.6-0.7-2.4-1.3c-1.5-1.1-2.6-2.7-3-4.1c-0.4-1.5-0.1-2.5,0.6-3.6c0.7-1.1,1.6-1.7,2.3-2.1
		c0.7-0.4,1.2-0.6,1.6-0.9c0.4-0.4,0.6-0.8,0-1.7c-0.3-0.4-0.9-0.7-1.6-1c-0.7-0.2-1.7-0.2-2.6,0C266.5,258.9,266.4,258.9,266.3,259
		z"
          />
          <path
            fill="#D10909"
            d="M255.2,174.4l4.4-6.1l3.3-4.5l3.5,0.4c4.2,3.7,13.3,12.7,20.8,27.6c2.8,5.5,5.6,12.3,7.8,20.3
		c-4.6,1-9.7,1.8-14.9,2.2c-1.6-5.2-3.5-10.2-5.9-14.9C265.9,182.4,255.3,174.4,255.2,174.4z"
          />
          <path d="M127.5,290l46.8-23.3l12.2-0.5c0,0,5.9,16.5,6.7,22.4C154.9,292.7,127.5,290,127.5,290z" />
          <path
            d="M153.9,272.2c-6.7-37.7,0.6-65.2,8-81.8c9.8-22.2,23.1-33.3,24.6-34.5l7.8-6.3l11,13.6l11,13.5l-7.7,6.2
		c-0.6,0.5-8.8,7.9-15,22.2c-7.8,18.1-9.4,39.2-4.8,62.9l2.4,12.2l-12.5-0.3c-1.4,0-2.8-0.1-4.2-0.1c-3.4,0-6.8,0.1-10,0.3l-9,0.6
		L153.9,272.2z"
          />
          <path
            fill="#FF4A4A"
            d="M178.9,270.2c-5-25.7-3.2-48.8,5.4-68.8c7.5-17.4,17.7-25.9,17.8-25.9l-4.7-5.8l-4.7-5.8
		c-0.5,0.4-12.7,10.4-21.7,30.7c-7.1,15.9-13.4,41.3-7.3,76C168.8,270.1,173.8,270,178.9,270.2z"
          />
          <path
            fill="#FFFFFF"
            d="M170,282.5c-0.3,0-0.7,0-1,0c-2.2-0.2-4-1-5.1-1.7c-1.2-0.7-2.1-1.7-2.7-2.7c-0.1-0.2-0.2-0.4-0.3-0.7
		l-0.4-1.4l-1.2,0.9c-1,0.8-2.2,1.4-3.4,1.8c-1.2,0.4-2.5,0.6-3.8,0.6c-1.2,0-2.4-0.2-3.6-0.6c-2.7-0.9-4.9-2.8-6.2-5.2
		c-0.7-1.3-1-2.6-1.1-3.9c0-1.3,0.2-2.5,0.7-3.6c0.5-1.2,1.2-2.2,2.1-3l1.1-1l-1.3-0.7c-0.8-0.4-1.5-0.9-2.2-1.5
		c-1.9-1.8-2.9-4.4-2.8-7.1c0.1-1.4,0.7-3,1.5-4.2c0.8-1.1,2-2,3.4-2.7c1.1-0.5,2.4-0.9,3.7-1c0.3,0,0.6,0,0.8,0
		c0.8,0,1.6,0.1,2.4,0.3c1.6,0.4,3.1,0.9,4.3,1.8c0.2,0.2,0.5,0.3,0.7,0.5l1.2,1l0.4-1.5c0.3-1,0.7-1.9,1.1-2.8
		c0.7-1.2,1.5-2.2,2.4-3.1c0.4-0.4,0.9-0.8,1.4-1.2l0.3-0.2l0.2-0.1c0.6-0.3,1.1-0.7,1.7-0.9c0.6-0.3,1.3-0.5,1.9-0.7l0.3-0.1l0.1,0
		c0.7-0.1,1.4-0.3,2.1-0.3c0.3,0,0.6,0,0.9,0c1.2,0,2.4,0.2,3.5,0.5c2.5,0.7,4.8,2.1,6.6,4c1.9,2.1,2.5,4.1,2.7,4.9
		c0,0.1,0.4,2.6,0.4,2.6l1.5-1.8c0.7-0.9,1.5-1.7,2.3-2.3c1.2-0.9,3.7-2.4,7.1-2.4c0.3,0,0.7,0,1,0c1.2,0.1,3,0.5,4.6,1.7
		c1.3,1,2.4,2.5,2.9,4.1c0.5,1.4,0.6,3,0.4,4.5c-0.1,0.8-0.3,1.4-0.5,2.1c-0.2,0.7-0.5,1.2-0.8,1.7c-0.9,1.6-2.1,2.9-3.6,3.9
		l-1.2,0.8l1.1,0.9c0.9,0.7,1.6,1.5,2.1,2.5c0.6,1.1,1,2.7,0.9,4.1c0,1.5-0.4,2.9-1.1,4.3c-1.3,2.6-3.7,4.7-6.5,5.8
		c-1.5,0.6-3.1,0.9-4.8,0.9l0,0c-0.9,0-1.8-0.1-2.8-0.3c-2.5-0.5-4.2-1.5-4.9-2c-0.2-0.1-0.3-0.2-0.4-0.3l-0.8-0.7l-0.7,0.8
		c-0.7,1-2,2.4-4,3.4C173.4,282.1,171.7,282.5,170,282.5z"
          />
          <path
            fill="#C2D8FF"
            d="M200.7,274.1c0.7-1.5,1.2-3.1,1.2-4.7c0.1-1.6-0.3-3.3-1.1-4.6c-0.6-1.2-1.5-2.1-2.4-2.8
		c0.9-0.6,1.9-1.4,2.9-2.7c-8.7-4.6-14.3,0.2-14.3,0.2s4.9,7.1-1.1,9.5c-6,2.3-8.8-4.2-8.8-4.2s-0.7,9-7.8,7.8
		c-8.4-1.4-7.7-9.3-7.7-9.3s-4.7,7-9.6,4.7c-5-2.3-1.5-5.5-1.5-5.5L143,262c0.2,0.1,0.3,0.2,0.5,0.2c-0.9,0.8-1.8,1.9-2.4,3.3
		c-0.5,1.2-0.8,2.5-0.7,4.1c0.1,1.5,0.5,3,1.2,4.4c1.4,2.7,3.9,4.7,6.7,5.7c2.9,1,5.7,0.7,8-0.1c1.4-0.5,2.6-1.2,3.6-2
		c0.1,0.3,0.2,0.6,0.4,0.9c0.5,1,1.6,2.1,3,3c1.5,0.9,3.4,1.7,5.5,1.8c2.1,0.2,4.4-0.2,6.4-1.2c1.9-0.9,3.3-2.3,4.4-3.7
		c0.2,0.1,0.3,0.3,0.6,0.4c1.2,0.8,3,1.7,5.3,2.2c2.3,0.4,5.2,0.5,8.1-0.7C196.6,279.2,199.1,277,200.7,274.1z"
          />
          <path
            d="M203.4,248.7c-0.5-1.7-1.6-3.4-3.3-4.6c-1.6-1.2-3.5-1.8-5.2-1.9c-3.4-0.3-6.6,0.9-8.8,2.5c-1,0.8-1.9,1.6-2.5,2.5
		c0-0.1,0-0.2-0.1-0.4c-0.3-1.6-1.2-3.6-2.9-5.4c-1.7-1.8-4.1-3.5-7.1-4.3c-1.5-0.4-3.1-0.6-4.7-0.5c-0.8,0-1.6,0.2-2.4,0.3
		c-0.8,0.2-1.6,0.4-2.3,0.8c-0.7,0.3-1.4,0.7-2.1,1.1c-0.6,0.5-1.2,0.9-1.8,1.4c-1.1,1-1.9,2.2-2.6,3.3c-0.6,1-1,2-1.2,3
		c-0.2-0.2-0.5-0.4-0.8-0.6c-1-0.7-2.5-1.5-4.7-1.9c-1-0.2-2.3-0.4-3.6-0.2c-1.3,0.1-2.7,0.4-4,1c-1.3,0.6-2.7,1.6-3.7,3
		c-1,1.4-1.7,3.1-1.7,4.7c-0.2,3.3,1.2,6,3.1,7.8c0.8,0.7,1.6,1.3,2.4,1.7c-0.9,0.8-1.8,1.9-2.4,3.3c-0.5,1.2-0.8,2.5-0.7,4.1
		c0.1,1.5,0.5,3,1.2,4.4c1.4,2.7,3.9,4.7,6.7,5.7c2.9,1,5.7,0.7,8-0.1c1.4-0.5,2.6-1.2,3.6-2c0.1,0.3,0.2,0.6,0.4,0.9
		c0.5,1,1.6,2.1,3,3c1.5,0.9,3.4,1.7,5.5,1.8c2.1,0.2,4.4-0.2,6.4-1.2c1.9-0.9,3.3-2.3,4.4-3.7c0.2,0.1,0.3,0.3,0.6,0.4
		c1.2,0.8,3,1.7,5.3,2.2c2.3,0.4,5.2,0.5,8.1-0.7c2.9-1.2,5.5-3.4,7-6.3c0.7-1.5,1.2-3.1,1.2-4.7c0.1-1.6-0.3-3.3-1.1-4.6
		c-0.6-1.2-1.5-2.1-2.4-2.8c1.2-0.8,2.7-2.1,3.9-4.2c0.3-0.6,0.6-1.2,0.9-1.9c0.3-0.7,0.4-1.5,0.5-2.3
		C204,252.1,203.9,250.4,203.4,248.7z M195,260.4c-1-0.2-1.9-0.1-2.6,0.1c-0.7,0.3-1.2,0.6-1.5,1c-0.6,0.9-0.3,1.3,0.1,1.7
		c0.4,0.3,1,0.5,1.6,0.8c0.7,0.4,1.6,1,2.4,2c0.7,1.1,1.1,2,0.7,3.6c-0.3,1.5-1.3,3.1-2.8,4.3c-0.7,0.6-1.5,1-2.3,1.4
		c-0.9,0.3-1.8,0.6-2.6,0.7c-1.8,0.3-3.5,0.2-4.8,0c-0.8-0.1-1.4-0.2-2-0.2c0.3-0.8,0.4-1.5,0.4-2.2c0.1-1.4-0.3-2.5-0.9-3.1
		c-0.6-0.6-1.1-0.7-1.6-0.5c-0.5,0.2-0.8,0.7-1.2,1.3c-0.4,0.6-0.9,1.4-1.5,2.2c-0.6,0.8-1.5,1.7-2.4,2.3c-1,0.7-2.1,1.2-3.3,1.5
		c-1.2,0.3-2.6,0.3-3.7,0.1c-2.4-0.3-4.2-1.4-4.9-1.5c0.4-0.6,0.8-1.1,1-1.7c0.2-0.7,0.2-1.3-0.1-1.7c-0.5-0.8-1.1-0.5-1.5-0.5
		c-0.5,0-0.6-0.2-1.3,0.2c-0.4,0.2-0.9,0.4-1.4,0.7c-0.6,0.3-1.3,0.5-2,0.7c-1.4,0.4-3,0.7-4.5,0.5c-1.5-0.1-3-0.8-4.2-1.8
		c-1.2-1-1.9-2.4-2-3.7c-0.2-1.4,0.3-2.7,0.8-3.7c0.4-0.7,0.8-1.2,1.1-1.6c1.3,0,2.3-0.3,3-0.7c0.8-0.5,1-1.1,0.7-1.5
		c-0.3-0.5-1-0.9-2-1.4c-0.9-0.5-2.1-1.1-3-2c-0.2-0.2-0.5-0.4-0.7-0.7c-0.2-0.2-0.4-0.4-0.5-0.7c-0.3-0.5-0.6-1.1-0.8-1.7
		c-0.1-0.6-0.2-1.2-0.1-1.8c0.1-0.5,0.3-1,0.7-1.5c0.8-1,2.4-1.7,3.9-2c1.5-0.3,3.1-0.2,4.3-0.1c1.2,0.1,2.2,0.1,2.6,0
		c0.1,0,0.2,0,0.2-0.1c0,0.4,0,0.9,0,1.3c0.1,2,0.9,3.4,1.6,4.1c0.8,0.7,1.3,0.6,1.7,0.1c0.3-0.5,0.5-1.3,0.8-2.4
		c0.3-1.1,0.7-2.4,1.5-3.9c0.8-1.4,1.9-2.9,3.4-3.9c1.5-1.1,3.2-1.7,5.1-1.7c1.9,0,3.9,0.5,5.5,1.3c1.6,0.8,2.9,1.9,3.8,2.9
		c0.5,0.5,0.8,0.9,1.1,1.3c0.3,0.4,0.5,0.6,0.7,0.8c0.3,0.3,0.6,0.5,0.8,0.7c-0.1,0.2-0.2,0.4-0.2,0.6c-0.6,1.9-0.5,3.5,0,4.5
		c0.5,1,1,1,1.5,0.7c0.5-0.3,0.9-1.1,1.6-2c0.7-0.9,1.6-2.1,2.8-3.1c1.3-1,2.9-1.9,4.6-2.1c0.9-0.1,1.8-0.1,2.5,0
		c0.8,0.2,1.3,0.4,1.8,0.9c1.1,1,1.6,2.9,1.4,4.6c-0.2,1.7-0.9,3.3-1.6,4.4c-0.5,0.9-1,1.6-1.3,2.1
		C195.3,260.5,195.1,260.4,195,260.4z"
          />
          <path
            fill="#D10909"
            d="M202.1,175.4l-4.7-5.8l-3.5-4.4l-3.5,0.6c-4,3.9-12.6,13.3-19.4,28.6c-2.5,5.7-4.9,12.6-6.7,20.6
		c4.7,0.8,9.7,1.3,15,1.4c1.3-5.2,3-10.3,5.1-15.2C191.8,184,202,175.5,202.1,175.4z"
          />
          <path
            d="M174.8,208.3c-26.4,0-51.3-10.7-70-30.2C87.9,160.5,79.4,134,79.6,99.3c0.1-24.2,4.5-43.9,4.7-44.7l3-13.3l249.2-13.3
		l5.1,11c19,40.8,20,88.9,2.5,122.5c-11.5,22.1-29.6,35.9-52.3,39.9c-8.5,1.5-16.5,2.2-24,2.2c-19.4,0-32.5-5.1-40.8-10.4
		C211.5,203,193.2,208.3,174.8,208.3z"
          />
          <path
            fill="#FF4A4A"
            d="M325.3,46.6l-223.5,12c0,0-16.6,73.2,16,107.1s81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14
		C337.9,174.9,351.9,103.8,325.3,46.6z"
          />
          <path
            fill="#D10909"
            d="M333.4,68.8c-2.1-0.9-4.2-1.7-6.4-2.3c-8-1.9-16.5-2.6-24.8-3.4c-17.4-1.7-35-2.1-52.4-1.8
		c-34.4,0.7-69.2,3.4-103.4,7.9c-16.2,2.1-33.1,5-48,12.1c-0.4,4.8-0.8,10.1-0.9,15.7c4.1,7.3,10.8,12.7,20,13.3
		c8.7,0.6,17-4.3,21.2-11.5c3.9,3.7,9.4,5.8,15,5.4c6.5-0.5,11.9-4.2,15.5-9.2c4.8,6.5,12.5,10.8,20.8,10.4
		c8.8-0.4,16.8-6,20.7-13.7c8,6.1,19.4,5.8,27.1-0.9c4.9,6.7,12.7,11.1,21.3,10.7c7.6-0.4,14.5-4.5,18.8-10.5
		c4.5,5.5,11.4,8.9,18.7,9.2c10.4,0.4,19.5-5.5,25.8-13.4c3.1,1.4,6.4,2.2,9.7,2.5c-0.9,27.3-6,58.9-27.6,77.8
		c-9.5,8.3-22,13.3-34.6,13.5c-6.8,0.1-13.4-0.9-19.8-3c-3.1-1-6.1-2.1-9.1-3.4c-3.2-1.4-7.2-2.5-10.2-4.5c3-5,4.7-10.5,5.6-16.3
		c0.7-4.3,1-8.6,1.4-12.9c0.2-2.4,0.4-4.8,0.7-7.2c0.1-0.9,0.2-1.8,0.2-2.7c0-0.4,0.1-0.7,0.1-1.1c-0.2-4.3-1.2-8.5-4.4-11.8
		c-1.2,0-2.3,0.4-3.3,1c1.7,11.7,1.8,23.4-3,34.6c-3.2,7.5-8.6,14.5-15.9,17.2c-12.2,9-29.6,12.2-44.2,10.7
		c-16.5-1.7-32.5-9.5-44.6-20.7c-6.2-5.8-11.5-12.4-16.2-19.4c-2.2-3.3-4.7-6.7-7-10.2c2.9,13,8.1,25.4,17.1,34.8
		c32.6,33.9,81.8,30.6,110.4,4c0,0,11.3,22.6,60.5,14C331.7,176,347.8,120.8,333.4,68.8z"
          />
          <g>
            <path
              d="M232.5,179.3c13.7-21.7,13.8-50.3,0.2-72.2c-3.1-4.9-14.1-3.2-10.1,3.2c11.6,18.7,11.5,44.2-0.2,62.9
			C219,178.7,229.5,184.1,232.5,179.3L232.5,179.3z"
            />
          </g>
          <g>
            <path
              d="M241.7,108.4c0.6,6.6-1.4,12.3-6.3,16.9c-4.6,4.2-1,13.9,4.7,8.6c7.8-7.1,12-17.5,11.1-28
			C250.5,98.1,241.1,102.1,241.7,108.4L241.7,108.4z"
            />
          </g>
          <g>
            <path
              d="M216.7,160.5c-2.3,0.5-1.6,1.3,1,2.1c2.6,0.8,7.1,1.5,12.2,1.5c5.1,0,10.6-0.8,15.1-2.2c4.5-1.3,8.1-3.1,9.4-4.5
			c2.6-2.9-5.4,0.1-15,1.6c-4.8,0.8-10,1.2-14.3,1.3C220.8,160.5,217.6,160.4,216.7,160.5z"
            />
          </g>
          <g>
            <path d="M224.9,154.3c-2.5,1,1.7,2,7.3,1.9c5.5,0,12-1.2,13.7-2.6c1.7-1.4-3-1-8.4-0.6C232,153.5,225.9,153.9,224.9,154.3z" />
          </g>
          <g>
            <path
              d="M221.2,136.8c-1.7,0.5-1.1,1.1,0.9,1.6c2,0.5,5.4,0.8,9.3,0.5c3.8-0.3,8-1.1,11.4-2.4c3.5-1.2,6.2-2.7,7.4-3.9
			c2.3-2.4-4.1,0.2-11.5,1.8c-3.7,0.8-7.7,1.4-11,1.8C224.3,136.5,221.8,136.6,221.2,136.8z"
            />
          </g>
          <path
            fill="#FFFFFF"
            d="M122.1,94.8c-0.3,0-0.5,0-0.8,0c-2-0.1-4-0.5-5.9-1.2c-3.7-1.4-6.9-4-8.7-7c-1.6-2.6-2.2-5.8-1.5-8.8
		c0.4-2,1.2-3.4,1.6-4.2c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.3,0.3-0.5,0.4-0.7c-0.6,0.3-1.4,1-2.3,2c-1.3,1.6-2.2,3.9-2.4,6.3l-0.1,0.6
		l-0.7,0.4c-0.5,0.2-1,0.5-1.6,0.8c-2,1-4.8,2.2-8,2.7c-1.1,0.2-2.1,0.3-3.1,0.3c-0.7,0-1.3,0-1.9-0.1c-1.9-0.3-3.6-0.8-5.1-1.6
		c-3.5-1.7-6-4.8-6.6-8.2c-0.3-1.6-0.4-3.4-0.1-5.6c0.2-1.9,0.6-3.6,1.2-5.3c1-3.1,2.5-5.8,4.3-7.7c1-1.2,2.1-2,2.8-2.6l0.5-0.4
		l0.5,0.2c1.1,0.5,2.3,0.8,3.7,0.9l0.8,0c0.3,0,0.6,0,0.8,0c0.4-0.1,0.8-0.1,1.1-0.2c0,0-0.1,0-0.1-0.1c-0.8-0.3-1.9-0.7-3.2-1.3
		c-1.3-0.7-2.3-1.4-3.2-2.2c-1.2-1-2.2-2.3-3-3.6c-2-3.2-2.6-6.9-1.6-10.5c0.9-3.8,3.5-7.5,6.8-9.9c1.7-1.2,3.5-2.1,5.4-2.7
		c1.8-0.5,3.7-0.8,5.7-0.8l0.2,0c3,0,6.1,0.6,9.2,1.8c1.6,0.7,2.9,1.3,3.8,1.8c0.4,0.2,0.7,0.3,0.9,0.4c0.6,0.2,1,0.4,1.4,0.5
		l1.2,0.4l-0.8,1.3c-0.1,0.1-0.1,0.2-0.2,0.3c-2,3.6-2.1,6.9-1.9,8.6c0.2,2.4,1,4.1,1.8,4.9c0,0,0,0,0,0c0-0.3,0-0.7,0.1-1.1
		c0-0.5,0-1.1,0.1-1.7c0.1-0.9,0.2-1.9,0.5-3.1c0.3-1.2,0.7-2.4,1.2-3.5c1.2-2.7,3.1-4.9,5.5-6.4c2.5-1.6,5.7-2.5,8.7-2.5l0.2,0
		c3,0,6,1,8.5,2.7c1.1,0.7,2.1,1.6,3,2.6c0.9,1,1.6,1.9,2.1,2.7c0.7,1.1,1.2,2.1,1.5,2.8l0.2,0.5l0.1,1.6l-1.4-0.2
		c-0.9-0.2-1.8-0.4-2.7-0.4c-1.4,0-2.8,0.3-3.8,0.8c-1.9,0.9-2.8,2.4-2.7,3.3c0.1,0.6,0.3,0.7,0.6,0.7c0.1,0,0.2,0,0.3,0
		c0.4,0,0.9-0.2,1.5-0.3c0.7-0.2,1.5-0.4,2.4-0.5c0.7-0.1,1.5-0.2,2.3-0.2c1,0,2.1,0.1,3,0.3c0.7,0.1,1.4,0.3,1.9,0.5
		c0.5,0.1,1,0.3,1.2,0.3c0.5,0,0.7-0.2,0.8-0.2c0,0,0.1-0.3-0.1-0.8c-0.1-0.2-0.3-0.5-0.5-0.9c-0.2-0.3-0.5-0.6-0.9-1
		c-0.1-0.1-0.3-0.2-0.4-0.3l-0.6-0.4l0.2-0.7c0.1-0.4,0.2-0.7,0.4-1.2c0.7-2,1.6-3.8,2.7-5.3c1.1-1.5,3-3.6,5.8-5.1
		c2.1-1.1,4.5-1.8,7-1.8c0.4,0,0.7,0,1.1,0c2.7,0.2,5.4,1,7.8,2.4c2.4,1.3,4.2,2.9,5.3,4.1c0.2,0.2,0.5,0.5,0.7,0.7l0.2,0.2
		c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.2,0.3,0.3,0.4,0.5c0.4,0.5,0.7,0.7,0.8,0.8c0.2,0.1,0.3,0.2,0.4,0.3l0.4,0.4l-0.1,0.6
		c-0.1,0.5-0.2,1-0.2,1.4c-0.2,2.4,0.3,4.3,0.9,5.2c0.1-0.2,0.1-0.5,0.2-0.8c0.1-0.6,0.2-1.3,0.5-2.1c0.3-1.4,1.1-3.7,2.8-6.3
		c1.6-2.5,3.9-4.7,6.4-6.3c2.9-1.8,6.2-2.9,9.1-3c0.2,0,0.3,0,0.5,0c2.8,0,5.5,1,7.8,3c1,0.8,1.9,1.8,2.8,3c0.7,0.9,1.3,1.8,2,2.9
		c0.4,0.7,0.8,1.3,1.1,1.8c0.4,0.7,0.8,1.4,1,1.6c0.2,0.2,0.3,0.4,0.5,0.5c0-0.5-0.1-1.3-0.3-2.3c-0.3-1.2-0.7-2.4-1.2-3.6l-0.4-0.9
		l0.9-0.4c0.4-0.2,1-0.7,1.8-1.3l0.2-0.2c1-0.8,2.6-2,4.5-3c2.2-1.2,4.3-2.1,6.4-2.6c1.9-0.5,3.8-0.7,5.8-0.7c0.6,0,1.1,0,1.7,0.1
		c2.4,0.2,4.8,0.7,7.1,1.6c2.9,1.1,5.1,2.4,6.5,3.4l1.4,0.9l-0.6,0.9c-1.1,1.7-2,3.4-2.4,5.1c-0.9,3.1-0.4,5-0.2,5.5
		c0.1-0.3,0.3-0.6,0.4-1c0.2-0.5,0.5-1.2,0.8-1.8c1.1-2.3,2.4-4.3,3.9-6c1.5-1.7,4-4,7.3-5.5c2.4-1.1,5.1-1.7,7.7-1.7
		c0.6,0,1.3,0,1.9,0.1c1.8,0.2,3.4,0.6,4.8,1.1c0.5,0.1,1,0.3,1.4,0.6c0.2,0.1,0.5,0.2,0.7,0.3l0.1,0l0.1,0c0.2,0.1,0.5,0.2,0.7,0.4
		c0.4,0.2,0.9,0.4,1.3,0.7c2.7,1.6,4.7,3.6,5.8,4.9c0.3,0.3,0.6,0.7,0.8,1l0.1,0.1c0.1,0.1,0.2,0.3,0.3,0.4c0.2,0.2,0.3,0.4,0.5,0.6
		c0.5,0.7,0.7,1,0.8,1.1c0.2,0.2,0.4,0.4,0.5,0.6c0-0.5-0.2-1.3-0.5-2.4c-0.5-1.3-1.6-4-4.2-6.6l-1-1l1.2-0.7
		c0.4-0.2,1.1-0.7,1.9-1.4c1.3-0.9,2.9-2.2,5.1-3.3c2.7-1.3,5.1-2.1,7.6-2.4c0.9-0.1,1.9-0.2,2.9-0.2c0.5,0,1,0,1.4,0.1
		c1.4,0.1,2.9,0.3,4.3,0.8c0.5,0.1,1,0.3,1.5,0.5c0.2,0.1,0.4,0.1,0.6,0.2l0.1,0l0,0c0.2,0.1,0.4,0.2,0.6,0.3
		c0.5,0.2,0.9,0.4,1.4,0.7c1.1,0.6,2.3,1.4,3.6,2.4c3.5,2.7,5.6,5.9,7.2,8.3c0.3,0.4,0.5,0.8,0.8,1.1l-1.3,1.5
		c-0.9-0.5-1.9-0.9-2.8-1.1c-0.7-0.1-1.3-0.2-2-0.2c-1.1,0-2.1,0.2-3.1,0.5c-1.4,0.5-2.6,1.3-3.3,2.2c-0.6,0.7-0.9,1.5-0.8,2.1
		c0,0.3,0.1,0.4,0.1,0.4c0,0,0,0,0.1,0c0.3,0,0.7-0.1,1-0.2l0.4-0.2c0.5-0.2,1.1-0.4,1.9-0.6c1-0.2,1.9-0.4,2.8-0.4
		c0.2,0,0.3,0,0.5,0c1.2,0.1,2.5,0.4,3.6,0.9c1.1,0.5,2.2,1.3,3.2,2.2c1,0.9,1.8,2,2.4,2.7c0.3,0.4,0.6,0.8,0.7,0.9
		c0.3,0.2,0.5,0.3,0.6,0.4c0.1-0.1,0.2-0.4,0.2-1c0-1-0.2-2.2-0.7-3.3c-0.5-1.2-1.3-2.3-2.3-3.2l-0.6-0.6l0.4-0.7
		c0.1-0.2,0.2-0.4,0.4-0.7c0.4-0.7,1-1.6,1.7-2.6c0.6-0.9,1.5-2,2.6-3.1c1.2-1.2,2.5-2.2,3.8-3c2.7-1.6,5.7-2.5,8.6-2.5
		c0.7,0,1.4,0,2.1,0.1c4,0.5,7.9,2.6,10.6,5.6c1.3,1.5,2.4,3.2,3,5.1c0.6,1.7,0.9,3.6,0.8,5.5c-0.1,1.7-0.4,3.3-1,5
		c-0.5,1.3-1.1,2.6-1.9,3.9c-1.2,1.8-2.4,3-3.1,3.6l-0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.4l-0.7,0.8l-0.7-0.7c-3.6-3.2-7.5-4-9.5-4.2
		c-0.5,0-0.9-0.1-1.4-0.1c-1.9,0-3.7,0.4-4.9,1.1c0.2,0,0.5,0.1,0.7,0.1c0.8,0.1,1.7,0.2,2.8,0.4c3,0.6,5.5,1.7,7.6,3.2
		c1.4,1,2.6,2.2,3.5,3.5c1,1.4,1.8,3,2.2,4.8c0.4,1.8,0.6,3.7,0.4,5.6c-0.2,1.9-0.8,3.8-1.6,5.5c-1.5,3.1-4.4,5.6-8,7.1
		c-3.2,1.3-6.4,1.8-8.8,2.1c-0.8,0.1-1.6,0.2-2.3,0.3c-1.2,0.1-2.1,0.2-2.5,0.3c-0.5,0.1-0.9,0.2-1.2,0.3l-2,0.7l0.7-2l0.1-0.3
		c0-0.1,0.1-0.2,0.1-0.3c0.2-0.8,0.4-1.8,0.5-2.9c0-0.9,0-1.8-0.2-2.7c-0.3-1.5-1-3-1.9-4.2c-1.7-2.3-3.8-2.9-4.7-2.9c0,0,0,0,0,0
		c0,0,0.1,0.1,0.1,0.1c0.5,0.5,1.2,1.2,1.8,2.1c0.5,0.7,2.1,3.3,1.8,6.6c-0.2,2.8-1.9,5.8-4.4,7.9c-2.4,2.1-5.9,3.5-9.7,4
		c-0.9,0.1-1.9,0.2-2.9,0.2c-2.5,0-5.1-0.3-7.5-0.9c-2.8-0.7-5.5-1.8-7.7-3.2c-1.3-0.8-2.3-1.6-2.9-2.1c-0.3-0.2-0.5-0.4-0.7-0.5
		c-0.5-0.3-0.8-0.5-1.1-0.7l-2.5-1.3l2.7-0.5c0.5-0.1,1-0.2,1.5-0.4c2.1-0.7,3.6-1.8,4.5-2.6c2.4-2.1,3.3-4.4,3.1-5.6
		c0-0.2-0.1-0.3-0.1-0.3c-0.2,0-0.5,0.1-1.2,0.5c-0.4,0.3-0.9,0.6-1.4,0.9c-1.3,0.9-2.8,2-4.6,2.7c-1.4,0.6-2.7,1-4,1.2
		c-0.5,0.1-1,0.1-1.6,0.1c-0.8,0-1.7-0.1-2.5-0.2c-1.7-0.3-3-1-3.9-1.4c-0.3-0.1-0.6-0.3-0.8-0.3c-0.4-0.1-0.6-0.1-0.7-0.1
		c0,0,0,0,0,0c0,0.2,0,0.5,0.3,1.1c0.5,1,1.4,2,2.5,2.7c0.2,0.1,0.5,0.3,0.7,0.4l0.9,0.5l-0.5,0.9c-0.8,1.2-2.2,3-4.4,4.6
		c-1.1,0.8-2.3,1.5-3.6,2c-1.4,0.5-2.8,0.9-4.3,1.1c-1,0.1-1.9,0.2-3,0.2c-2.1,0-4.4-0.3-6.6-0.9c-2.9-0.8-5.8-2.1-8.2-3.9
		c-1-0.8-2-1.7-2.9-2.6c-0.8-0.9-1.5-1.8-2-2.7c-0.7-1.1-1.1-2.2-1.4-2.8c-0.1-0.3-0.2-0.5-0.3-0.6c-0.1-0.3-0.3-0.5-0.4-0.7
		c0,0,0,0.1,0,0.1c-0.1,0.5-0.2,1.3-0.1,2.2c0.1,0.8,0.3,1.6,0.6,2.6l0.2,0.6l-0.6,0.5c-1.8,1.5-4.5,3.9-8.4,5.2
		c-1.9,0.7-4,1.1-6.1,1.1l-0.1,0c-1.9,0-4-0.3-5.8-0.8c-2.4-0.7-4.2-1.7-5.5-2.3c-0.5-0.3-0.9-0.5-1.1-0.6l-0.7-0.3l0.1-0.8
		c0-0.4,0.1-0.7,0.1-1c0.1-2-0.2-3.8-0.8-5c0,0,0,0,0,0c-0.2,0.4-0.3,1-0.5,1.7c-0.1,0.3-0.2,0.7-0.3,1c-0.4,1.5-1.1,3.7-2.4,6.1
		c-1.4,2.4-3.3,4.5-5.5,5.9c-2.4,1.5-5.1,2.4-7.8,2.4c-0.2,0-0.4,0-0.5,0c-3.2-0.1-6.1-1.6-8-2.8c-3.4-2.1-5.6-4.7-6.9-6.2
		c-0.4-0.5-0.8-0.9-0.9-1l-0.4-0.4l0.1-0.6c0.4-2.8-0.2-4.4-0.4-4.8c-0.1,0.4-0.3,0.8-0.5,1.3c-0.1,0.5-0.3,1-0.5,1.5
		c-0.6,1.6-1.5,3.9-3.3,6.2c-1.8,2.4-4.2,4.3-6.8,5.5c-2.5,1.1-5.2,1.7-8,1.7c-0.5,0-1,0-1.5-0.1c-3.1-0.2-6.1-1.3-8.7-3
		c-2-1.3-3.8-3-5.4-5.2c-0.7-1-1.3-1.9-1.7-2.5c-0.2-0.3-0.3-0.5-0.5-0.7l-0.8-1.2l1.4-0.4c0.9-0.2,1.7-0.5,2.4-0.9
		c2-1.1,3-2.5,3-3.5c0-0.3,0-0.5-0.1-0.5c0,0-0.2-0.1-0.4-0.1c-0.1,0-0.2,0-0.3,0c-0.6,0.1-1.4,0.3-2.4,0.5
		c-0.7,0.2-1.5,0.4-2.3,0.6c-1.8,0.4-4,0.7-6,0.8c-0.5,0-1,0-1.5,0c-0.8,0-1.8,0-2,0.1c-0.5,0.2-0.6,0.4-0.6,0.5
		c0,0.1,0,0.3,0.4,0.7c0.7,0.8,2.7,1.8,5.1,2.1c0.4,0.1,0.9,0.1,1.3,0.1l1.4,0l0,1.1c0,0.3,0,0.5-0.1,0.8c-0.1,1.5-0.7,4.6-2.9,7.8
		c-1.1,1.5-2.3,2.8-3.6,3.7c-1.5,1.1-3.2,1.9-5,2.4C125.6,94.5,123.9,94.8,122.1,94.8z"
          />
          <g>
            <path
              fill="#C2D8FF"
              d="M347.9,59.5c-0.5-1.8-1.2-3.4-2.2-4.8c-1-1.3-2.1-2.5-3.5-3.5c-0.9-0.7-1.9-1.2-3-1.7
			c-0.5,0.2-1,0.3-1.5,0.2c6.7,8-5.8,21.7-10.7,16.9c-3.1-3.1-10.1-4.9-14.8-5.9c1.9,4.8,2.3,10.6-2.7,13.1
			c-7,3.6-12.3-3.1-15.6-8.9c-6,4-12.7,5.4-19.6,4.6c-5.3,0.4-7.6-0.8-8.6-2c-0.3-0.1-0.6-0.2-1-0.3c-0.5,3-2.4,9.2-10.9,7.8
			c-11.1-1.8-16.8-15.1-16.8-15.1s0,11.5-13.3,14.2c-13.3,2.7-16-10.2-16-10.2s0.9,15.1-13.3,18.6c-10.6,2.6-16-7.5-18-12.9
			c-0.9,0.5-1.8,1.3-2.8,2.4c-3.3,3.6-6.1,7.7-10.6,9.8c-3.2,1.5-6.3,1.7-9.2,0.9c-4.2-0.1-6-2-6.7-4c-0.9-0.9-1.7-1.8-2.4-2.8
			c-0.4,0.4-1,0.8-1.6,1.1c-0.7,0.4-1.5,0.7-2.4,0.9l-1.4,0.4l0.8,1.2c0.1,0.2,0.3,0.4,0.5,0.7c0.4,0.6,0.9,1.5,1.7,2.5
			c1.6,2.1,3.4,3.9,5.4,5.2c2.6,1.7,5.6,2.8,8.7,3c0.5,0,1,0.1,1.5,0.1c2.8,0,5.5-0.6,8-1.7c2.6-1.2,5-3.1,6.8-5.5
			c1.8-2.3,2.7-4.6,3.3-6.2c0.2-0.5,0.4-1,0.5-1.5c0.2-0.5,0.3-1,0.5-1.3c0.2,0.4,0.8,2.1,0.4,4.8l-0.1,0.6l0.4,0.4
			c0.2,0.1,0.5,0.5,0.9,1c1.3,1.5,3.6,4,6.9,6.2c1.9,1.2,4.8,2.6,8,2.8c0.2,0,0.4,0,0.5,0c2.6,0,5.4-0.8,7.8-2.4
			c2.2-1.4,4.1-3.5,5.5-5.9c1.3-2.3,2-4.6,2.4-6.1c0.1-0.4,0.2-0.7,0.3-1c0.2-0.6,0.3-1.2,0.5-1.7c0,0,0,0,0,0c0.6,1.1,0.9,3,0.8,5
			c0,0.3-0.1,0.7-0.1,1l-0.1,0.8l0.7,0.3c0.2,0.1,0.7,0.3,1.1,0.6c1.2,0.6,3.1,1.6,5.5,2.3c1.8,0.5,3.9,0.8,5.8,0.8l0.1,0
			c2,0,4.2-0.4,6.1-1.1c3.8-1.3,6.5-3.6,8.4-5.2l0.6-0.5l-0.2-0.6c-0.3-1-0.5-1.8-0.6-2.6c-0.1-1,0-1.8,0.1-2.2c0,0,0-0.1,0-0.1
			c0.1,0.2,0.2,0.4,0.4,0.7c0.1,0.1,0.2,0.4,0.3,0.6c0.3,0.7,0.7,1.7,1.4,2.8c0.5,0.9,1.3,1.8,2,2.7c0.9,1,1.9,1.9,2.9,2.6
			c2.5,1.8,5.3,3.1,8.2,3.9c2.2,0.6,4.4,0.9,6.6,0.9c1,0,2-0.1,3-0.2c1.5-0.2,3-0.6,4.3-1.1c1.2-0.5,2.4-1.2,3.6-2
			c2.2-1.6,3.6-3.4,4.4-4.6l0.5-0.9l-0.9-0.5c-0.2-0.1-0.5-0.3-0.7-0.4c-1.1-0.7-2-1.8-2.5-2.7c-0.3-0.6-0.3-0.9-0.3-1.1h0
			c0.1,0,0.3,0,0.7,0.1c0.1,0,0.5,0.2,0.8,0.3c0.9,0.4,2.2,1.1,3.9,1.4c0.8,0.2,1.6,0.2,2.5,0.2c0.5,0,1.1,0,1.6-0.1
			c1.3-0.2,2.6-0.5,4-1.2c1.8-0.8,3.3-1.9,4.6-2.7c0.5-0.3,1-0.7,1.4-0.9c0.7-0.4,1-0.5,1.2-0.5c0,0.1,0.1,0.2,0.1,0.3
			c0.2,1.2-0.8,3.5-3.1,5.6c-0.9,0.8-2.4,1.9-4.5,2.6c-0.4,0.1-0.9,0.3-1.5,0.4l-2.7,0.5l2.5,1.3c0.3,0.1,0.6,0.4,1.1,0.7
			c0.2,0.1,0.4,0.3,0.7,0.5c0.6,0.5,1.6,1.3,2.9,2.1c2.2,1.4,4.9,2.5,7.7,3.2c2.4,0.6,5,0.9,7.5,0.9c1,0,2-0.1,2.9-0.2
			c3.9-0.4,7.3-1.8,9.7-4c2.5-2.1,4.2-5.2,4.4-7.9c0.3-3.3-1.3-5.9-1.8-6.6c-0.7-1-1.3-1.6-1.8-2.1c-0.1-0.1-0.1-0.1-0.1-0.1
			c0,0,0,0,0,0c0.9,0,3,0.6,4.7,2.9c0.9,1.2,1.6,2.7,1.9,4.2c0.2,0.9,0.3,1.8,0.2,2.7c-0.1,1.1-0.2,2-0.5,2.9c0,0.1-0.1,0.2-0.1,0.3
			l-0.1,0.3l-0.7,2l2-0.7c0.3-0.1,0.7-0.2,1.2-0.3c0.4-0.1,1.3-0.2,2.5-0.3c0.7-0.1,1.4-0.2,2.3-0.3c2.4-0.3,5.6-0.8,8.8-2.1
			c3.7-1.5,6.5-4,8-7.1c0.9-1.7,1.4-3.5,1.6-5.5C348.5,63.3,348.4,61.3,347.9,59.5z"
            />
            <path
              fill="#C2D8FF"
              d="M82.3,83.6c1.5,0.8,3.2,1.3,5.1,1.6c0.6,0.1,1.3,0.1,1.9,0.1c1,0,2-0.1,3.1-0.3c3.2-0.5,5.9-1.7,8-2.7
			c0.6-0.3,1.1-0.5,1.6-0.8l0.7-0.4l0.1-0.6c0.2-2.3,1.1-4.6,2.4-6.3c0.9-1.1,1.7-1.7,2.3-2c-0.1,0.2-0.2,0.5-0.4,0.7
			c-0.1,0.1-0.1,0.2-0.2,0.4c-0.5,0.8-1.2,2.2-1.6,4.2c-0.6,3-0.1,6.2,1.5,8.8c1.8,3,5,5.7,8.7,7c1.9,0.7,3.9,1.1,5.9,1.2
			c0.3,0,0.5,0,0.8,0c1.8,0,3.5-0.2,5.1-0.7c1.9-0.5,3.6-1.3,5-2.4c1.3-0.9,2.5-2.2,3.6-3.7c2.2-3.2,2.7-6.3,2.9-7.8
			c0-0.3,0.1-0.6,0.1-0.8l0-1.1l-1.4,0c-0.5,0-0.9,0-1.3-0.1c-1.3-0.1-2.5-0.5-3.4-0.9c-2.3,3.3-7,7.5-14.9,6.1
			c-12.4-2.2-5.8-16.8-2.7-17.7c-11.1-0.4-18.6,9.3-18.6,9.3s-7.5,2.7-10.6-7.5C82.8,57.2,103.1,55,103.1,55s-8.4-0.4-15.9-13.7
			c-3.4-6-1.5-11.4,1.6-15.4c-0.8,0.4-1.5,0.8-2.2,1.4c-3.3,2.4-5.9,6.1-6.8,9.9c-0.9,3.6-0.3,7.3,1.6,10.5c0.8,1.4,1.9,2.6,3,3.6
			c0.9,0.8,2,1.5,3.2,2.2c1.3,0.6,2.4,1,3.2,1.3c0.1,0,0.1,0,0.1,0.1C90.8,55,90.4,55,90,55.1c-0.2,0-0.4,0-0.8,0l-0.8,0
			c-1.4-0.1-2.6-0.5-3.7-0.9l-0.5-0.2l-0.5,0.4C83,54.9,82,55.7,81,56.9c-1.8,1.9-3.3,4.7-4.3,7.7c-0.5,1.6-0.9,3.4-1.2,5.3
			c-0.3,2.2-0.2,4,0.1,5.6C76.3,78.9,78.8,81.9,82.3,83.6z"
            />
            <path
              fill="#C2D8FF"
              d="M346.7,50.6l0.7,0.7l0.7-0.8c0.1-0.1,0.2-0.3,0.3-0.4l0.3-0.3c0.6-0.6,1.9-1.8,3.1-3.6
			c0.8-1.3,1.5-2.6,1.9-3.9c0.6-1.7,0.9-3.4,1-5c0.1-1.9-0.2-3.8-0.8-5.5c-0.6-1.8-1.7-3.6-3-5.1c0,0-0.1-0.1-0.1-0.1
			c-0.5,8.6-4.9,17.2-8.9,21C343.5,48.3,345.1,49.2,346.7,50.6z"
            />
          </g>
          <path
            d="M357.3,27.9c-2.3-4.8-6.6-8.6-11.6-10.3c-2.5-0.9-5.1-1.3-7.6-1.2c-2.6,0.1-5,0.7-7.1,1.6c-4.3,1.9-7.2,5-8.9,7.9
		c-0.5,0.8-0.8,1.6-1.1,2.4c0-0.2-0.1-0.3-0.1-0.5c-0.6-2.1-1.7-4.8-3.7-7.3c-2-2.5-4.7-4.9-8.1-6.6c-3.3-1.7-7.2-2.5-10.9-2.3
		c-1.8,0.1-3.6,0.4-5.2,0.9c-0.8,0.2-1.6,0.5-2.3,0.8c-0.7,0.3-1.5,0.6-2.1,1c-2.7,1.5-4.7,3.2-6,4.8c-1.3,1.5-1.9,2.8-2.1,3.4
		c-0.1,0.3-0.1,0.6-0.1,0.9c-2.2-1.9-4.9-3.7-8.2-4.7c-1-0.3-2-0.6-3-0.8c-1-0.1-2.1-0.3-3.1-0.3c-1.1-0.1-2.1,0-3.2,0.1
		c-1.1,0.2-2.1,0.3-3.1,0.6c-1,0.2-2,0.7-3,1c-0.9,0.5-1.9,0.9-2.7,1.4c-1.7,1-3.2,2.3-4.5,3.6c-0.1,0.1-0.3,0.3-0.4,0.4
		c-0.9-1.3-2.3-2.9-4.4-4.3c-2-1.4-4.6-2.8-7.5-3.5c-2.9-0.8-6.2-1-9.3-0.5c-3.1,0.5-6,1.6-8.3,3c-2.4,1.4-4.2,3.2-5.4,4.8
		c-0.9,1.2-1.4,2.4-1.7,3.3c-0.2-0.4-0.5-0.9-0.8-1.4c-0.9-1.4-2.1-2.8-3.6-4.1c-1.5-1.3-3.4-2.3-5.5-3c-2.1-0.6-4.4-0.7-6.5-0.5
		c-2.1,0.3-4.1,0.9-6,1.7c-3.8,1.7-6.9,4.3-9,7.3c-0.9,1.2-1.6,2.5-2.2,3.8c-0.7-1.7-1.9-3.6-3.8-5.5c-2.1-2-4.9-4-8.4-5
		c-1.7-0.5-3.6-0.8-5.5-0.9c-0.9,0-1.9,0.1-2.8,0.2c-0.9,0.2-1.9,0.3-2.8,0.7c-0.9,0.3-1.8,0.7-2.6,1.1c-0.8,0.5-1.6,0.9-2.3,1.4
		c-1.5,1-2.7,2.3-3.7,3.5c-1,1.3-1.8,2.6-2.3,3.9c-0.5-1.1-1.2-2.2-2.1-3.4c-2-2.6-5.2-5.1-9.2-6.2c-4-1.1-8.4-0.9-12.2,0.7
		c-1.9,0.8-3.7,1.9-5.2,3.2c-1,0.8-1.8,1.8-2.5,2.8c-0.4-0.8-1.2-1.8-2.6-2.9c-1.9-1.7-5-3.6-9-4.7c-4-1.1-9-1.3-13.8,0.6
		c-4.8,1.9-9,5.6-11.5,10.3c-1.2,2.3-1.9,4.9-2.1,7.5c-0.2,2.6,0.3,5.2,1.2,7.4c1.3,3.1,3.4,5.5,5.6,7.1c-2.2,1.1-4.7,3.3-6.6,6.3
		c-2.1,3.3-3.6,7.4-4,12c-0.2,2.3-0.1,5,0.9,7.5c1,2.5,2.6,4.7,4.5,6.3c3.8,3.3,8.8,4.7,13.1,4.4c4.3-0.3,7.9-2,10.4-3.7
		c0.8-0.6,1.5-1.1,2.2-1.7c0.4,2.1,1.2,4.2,2.5,6.1c1.3,2,3.1,3.8,5.1,5.2c2,1.4,4.4,2.5,6.8,3.2c2.5,0.7,5,0.9,7.6,0.7
		c2.5-0.2,5-0.8,7.3-1.8c2.2-1,4.2-2.5,5.8-4.2c2.2-2.4,3.4-5.1,4-7.6c0.5,0.9,1.1,1.7,1.9,2.6c2.1,2.5,5.3,4.9,9.2,6.1
		c3.9,1.2,8.2,1.3,12.2,0.2c4-1.1,7.5-3.4,9.9-6.2c1.4-1.7,2.4-3.5,3.1-5.2c0.8,1.6,1.9,3.4,3.6,5.1c2,2.2,4.8,4.4,8.5,5.6
		c1.8,0.6,3.9,0.9,5.9,0.8c2-0.1,4-0.6,5.8-1.3c3.6-1.5,6.6-4.2,8.4-7.1c0.8-1.3,1.4-2.7,1.9-4c0.8,1,1.9,2.1,3.4,3.1
		c1.8,1.2,4.1,2.2,6.7,2.7c2.5,0.5,5.4,0.5,8-0.1c2.6-0.6,5-1.8,6.9-3.2c1.7-1.3,3-2.8,3.9-4.3c0.2,0.3,0.4,0.6,0.6,0.8
		c2,2.6,4.9,5,8.3,6.6c3.5,1.6,7.3,2.5,11.3,2.6c3.9,0,7.9-1,10.9-3c3.1-1.9,5.1-4.5,6.2-6.9c0.3-0.8,0.6-1.5,0.7-2.2
		c0.3,0.1,0.7,0.2,1,0.2c1,0.1,2,0.2,3,0.1c0.1,0,0.1,0,0.1,0c-0.1,0.7,0.4,2.1,1.7,3.9c1.4,1.9,3.7,4,6.9,5.7
		c3.2,1.7,7.1,2.8,11.3,3.1c4.2,0.3,8.9-0.3,13.1-2.5c3.5-1.9,6.2-4.8,7.7-8.2c0.6,0.4,1.9,0.8,3.8,1.1c1.1,0.2,2.5,0.3,4,0.4
		c1.5,0.1,3.3,0,5.2-0.3c1.9-0.3,3.9-0.8,6-1.7c2.1-0.9,4.1-2.2,5.9-4c3.6-3.6,5.5-8.8,5.4-13.8c0-2.5-0.6-5-1.6-7.2
		c-0.7-1.6-1.7-3-2.7-4.3c0.7-0.3,1.4-0.6,2.3-1.2c2.2-1.5,4.9-4.2,6.4-8.2c0.8-2,1.3-4.3,1.3-6.7C359,32.9,358.4,30.3,357.3,27.9z
		 M353.8,37.4c-0.1,1.7-0.4,3.3-0.9,4.7c-0.5,1.4-1.2,2.6-1.9,3.7c-1.4,2-2.7,3.2-3.3,3.8c-0.1,0.1-0.2,0.3-0.3,0.4
		c-3.2-2.9-7-4.1-10-4.4c-3.2-0.3-5.6,0.4-6.9,1.2c-1.3,0.9-1.3,1.4-0.5,1.6c0.8,0.2,2.3,0.3,4.4,0.7c2.1,0.4,4.7,1.3,7.2,3.1
		c1.2,0.9,2.4,2,3.3,3.3c0.9,1.3,1.6,2.8,2.1,4.5c0.4,1.7,0.5,3.5,0.4,5.3c-0.2,1.8-0.7,3.5-1.5,5.1c-1.6,3.2-4.5,5.4-7.5,6.6
		c-3.1,1.3-6.1,1.8-8.5,2.1c-2.4,0.3-4.1,0.4-4.9,0.6c-0.5,0.1-0.9,0.3-1.3,0.4c0.1-0.2,0.2-0.4,0.2-0.7c0.3-1,0.4-2.1,0.5-3.1
		c0-1-0.1-2-0.3-2.9c-0.4-1.8-1.2-3.4-2.1-4.6c-1.8-2.5-4.2-3.4-5.6-3.3c-1.4,0.1-1.6,0.6-1.2,1.1c0.4,0.6,1.4,1.3,2.4,2.7
		c1,1.4,1.9,3.6,1.7,6c-0.2,2.4-1.6,5.2-4,7.3c-2.4,2.1-5.7,3.3-9.2,3.7c-3.5,0.4-7,0-10.1-0.7c-3-0.8-5.6-1.9-7.4-3.1
		c-1.8-1.1-3-2.2-3.6-2.6c-0.5-0.3-0.8-0.6-1.2-0.7c0.6-0.1,1.1-0.2,1.6-0.4c1.9-0.6,3.5-1.6,4.8-2.8c2.6-2.3,3.6-4.9,3.4-6.5
		c-0.2-1.6-1.3-1.4-2.8-0.5c-1.5,0.9-3.5,2.5-5.8,3.6c-1.2,0.5-2.4,0.9-3.7,1.1c-1.3,0.2-2.6,0.1-3.7-0.1c-2.3-0.4-3.9-1.6-4.6-1.7
		c-0.9-0.2-1.5-0.2-1.7,0.2c-0.3,0.4-0.3,1.2,0.2,2.2c0.5,1,1.4,2.2,2.8,3.1c0.2,0.2,0.5,0.3,0.8,0.5c-0.9,1.4-2.2,3-4.2,4.4
		c-1,0.7-2.1,1.4-3.4,1.9c-1.3,0.5-2.6,0.9-4.1,1.1c-2.9,0.4-6.1,0.1-9.1-0.7c-3-0.8-5.7-2.1-7.9-3.7c-1.1-0.8-2-1.7-2.8-2.5
		c-0.8-0.9-1.4-1.7-1.9-2.5c-1-1.6-1.4-2.9-1.7-3.4c-0.7-1.4-1.2-2-1.6-1.6c-0.2,0.2-0.4,0.6-0.6,1.3c-0.1,0.7-0.2,1.6-0.1,2.6
		c0.1,0.8,0.3,1.8,0.6,2.8c-1.8,1.5-4.4,3.8-8.1,5.1c-1.8,0.6-3.8,1-5.8,1c-2,0-3.9-0.3-5.7-0.8c-3.3-0.9-5.6-2.5-6.6-2.8
		c0-0.4,0.1-0.8,0.1-1.1c0.1-2.5-0.3-4.4-0.9-5.5c-0.6-1.1-1.1-1.2-1.5-0.6c-0.4,0.6-0.7,1.8-1.1,3.5c-0.5,1.7-1.2,3.8-2.3,5.8
		c-1.2,2.1-2.9,4.1-5.2,5.5c-2.3,1.5-5,2.3-7.7,2.2c-2.7-0.1-5.3-1.2-7.5-2.6c-4.4-2.8-6.9-6.4-7.8-7.1c0,0,0,0,0,0
		c0.3-2.4,0-4.3-0.5-5.4c-0.6-1.2-1.1-1.3-1.5-0.7c-0.4,0.6-0.7,1.9-1.3,3.6c-0.6,1.7-1.6,3.8-3.1,5.9c-1.6,2.1-3.7,4-6.4,5.2
		c-2.7,1.2-5.9,1.8-8.9,1.6c-3.1-0.2-5.9-1.3-8.2-2.8c-2.3-1.5-4-3.4-5.2-4.9c-1.1-1.5-1.7-2.6-2.1-3.2c0.9-0.2,1.8-0.6,2.6-1
		c2.2-1.1,3.5-2.8,3.5-4.3c0.1-1.4-0.8-1.8-2-1.6c-1.2,0.1-2.8,0.7-4.7,1.1c-1.9,0.4-4,0.7-5.8,0.8c-1.8,0.1-3.3,0-3.9,0.3
		c-1.4,0.7-1.5,1.6-0.5,2.7c1,1.1,3.2,2.2,5.8,2.4c0.6,0.1,1.2,0.1,1.8,0.1c0,0.2,0,0.5-0.1,0.7c-0.2,2.1-1,4.9-2.7,7.4
		c-0.9,1.3-2,2.5-3.3,3.4c-1.4,1-3,1.7-4.7,2.3c-1.8,0.5-3.7,0.7-5.6,0.6c-1.9-0.1-3.8-0.5-5.6-1.1c-3.5-1.3-6.6-3.8-8.2-6.6
		c-1.7-2.8-1.9-5.8-1.4-8.1c0.4-2.3,1.4-3.7,1.7-4.4c0.4-0.9,0.8-1.5,0.9-1.9c0.1-0.4,0.1-0.7-0.3-0.7c-0.6-0.1-2.5,0.6-4.2,2.8
		c-1.2,1.6-2.3,3.9-2.6,6.8c-0.5,0.3-1.1,0.6-1.8,0.9c-2,1-4.7,2.1-7.7,2.6c-1.5,0.2-3.2,0.3-4.7,0.1c-1.6-0.2-3.2-0.7-4.7-1.5
		c-3.1-1.5-5.5-4.3-6.1-7.5c-0.3-1.6-0.3-3.5-0.1-5.3c0.2-1.8,0.6-3.5,1.1-5.1c1-3.2,2.5-5.7,4.1-7.4c1-1.2,2-1.9,2.7-2.5
		c1.4,0.6,2.8,0.9,4,1c0.6,0,1.2,0,1.7,0c0.5-0.1,1-0.2,1.4-0.3c1.5-0.6,1.6-1.1,0.8-1.5c-0.7-0.3-2.3-0.7-4.2-1.7
		c-0.9-0.5-2-1.2-3-2.1c-1-0.9-2-2.1-2.8-3.4c-1.7-2.7-2.5-6.1-1.5-9.7c0.9-3.6,3.3-7,6.4-9.3c1.6-1.1,3.3-2,5.1-2.5
		c1.8-0.5,3.6-0.8,5.4-0.8c3.5,0,6.7,0.9,9,1.8c2.3,0.9,3.9,1.9,4.6,2.2c0.6,0.3,1.1,0.5,1.5,0.6c-0.1,0.2-0.2,0.3-0.3,0.5
		c-1.8,3.2-2.3,6.6-2,9.2c0.2,2.6,1.1,4.5,2,5.5c0.9,1,1.4,0.9,1.6,0.2c0.2-0.7,0.1-2,0.3-3.7c0.1-0.9,0.2-1.8,0.4-2.9
		c0.2-1,0.6-2.2,1.1-3.3c1-2.3,2.7-4.4,5.1-6c2.4-1.5,5.4-2.4,8.4-2.4c3,0,5.7,1,7.9,2.5c1.1,0.7,2,1.6,2.9,2.5
		c0.8,0.9,1.4,1.7,2,2.5c0.8,1.2,1.3,2.3,1.6,2.9c0,0.1,0,0.1,0,0.2c-2.4-0.7-5.2-0.5-7.3,0.5c-2.2,1-3.4,2.8-3.3,4.3
		c0.1,1.4,1,1.7,2,1.6c1-0.1,2.3-0.6,3.9-0.8c1.6-0.2,3.5-0.2,5.1,0.1c1.6,0.3,2.9,0.8,3.4,0.7c1.5-0.1,2-0.9,1.5-2.3
		c-0.2-0.3-0.4-0.7-0.6-1.1c-0.3-0.4-0.7-0.7-1.1-1.1c-0.2-0.1-0.3-0.3-0.5-0.4c0.1-0.3,0.2-0.7,0.4-1.1c0.5-1.4,1.2-3.3,2.6-5.1
		c1.3-1.8,3.2-3.6,5.5-4.8c2.3-1.2,4.9-1.8,7.6-1.6c2.7,0.2,5.3,1,7.4,2.2c2.1,1.2,3.8,2.6,5,3.9c0.3,0.3,0.6,0.6,0.8,0.9
		c0.2,0.3,0.5,0.5,0.7,0.8c0.4,0.5,0.7,0.8,0.9,1c0.1,0.1,0.2,0.2,0.3,0.3c-0.1,0.5-0.2,1-0.2,1.5c-0.3,2.7,0.3,4.8,1.1,5.9
		c0.8,1.1,1.2,1.1,1.6,0.5c0.3-0.6,0.4-1.9,0.9-3.6c0.4-1.7,1.2-3.8,2.7-6c1.4-2.2,3.5-4.4,6.1-6c2.5-1.6,5.7-2.8,8.6-2.9
		c2.9-0.1,5.5,1,7.6,2.7c1,0.9,1.9,1.8,2.7,2.8c0.8,1,1.4,1.9,1.9,2.8c1.1,1.7,1.8,3,2.2,3.5c1,1.3,1.7,1.6,2,1.2
		c0.3-0.5,0.3-1.8-0.1-3.8c-0.2-1.1-0.6-2.4-1.2-3.8c0.6-0.3,1.3-0.8,2.2-1.5c1.1-0.9,2.6-2,4.4-3c1.8-1,3.9-1.9,6.2-2.5
		c2.3-0.6,4.8-0.8,7.2-0.7c2.4,0.2,4.8,0.7,6.8,1.5c3.2,1.2,5.5,2.8,6.8,3.6c-1.2,1.8-2.1,3.7-2.6,5.4c-0.7,2.6-0.6,4.8-0.2,6.1
		c0.4,1.3,0.9,1.4,1.4,0.9c0.5-0.6,0.9-1.9,1.7-3.6c0.8-1.7,2-3.8,3.8-5.8c1.8-2,4.2-4,7-5.2c2.8-1.3,6-1.9,9.1-1.5
		c1.6,0.2,3.1,0.5,4.6,1c0.7,0.2,1.4,0.6,2.1,0.8c0.6,0.4,1.3,0.6,1.9,1c2.4,1.5,4.3,3.2,5.6,4.8c0.4,0.4,0.6,0.7,0.9,1.1
		c0.3,0.3,0.5,0.6,0.7,0.9c0.4,0.6,0.7,1,1,1.2c1.1,1.3,1.7,1.7,2,1.1c0.3-0.5,0.3-1.9-0.4-4c-0.7-2-2.1-4.6-4.4-7
		c0,0-0.1-0.1-0.1-0.1c0.5-0.3,1.2-0.8,2.1-1.5c1.2-0.9,2.9-2.1,4.9-3.2c2.1-1,4.6-2,7.3-2.3c1.3-0.2,2.7-0.3,4.1-0.2
		c1.4,0.1,2.8,0.3,4.1,0.7c0.7,0.2,1.3,0.5,2,0.7c0.6,0.3,1.3,0.6,1.9,0.9c1.2,0.7,2.4,1.4,3.5,2.3c4,3.1,6.3,7,7.8,9.2
		c-1-0.5-2-0.9-3.1-1.2c-2-0.4-4-0.2-5.6,0.3c-1.7,0.6-3,1.5-3.8,2.5c-0.8,1-1.1,2.1-1,2.8c0.1,0.8,0.5,1.1,0.9,1.2
		c0.4,0.1,0.9-0.1,1.6-0.3c0.6-0.2,1.3-0.5,2.2-0.7c0.9-0.2,1.9-0.4,3-0.3c1.1,0,2.2,0.3,3.3,0.8c1.1,0.5,2.1,1.2,2.9,2
		c1.7,1.6,2.7,3.3,3.2,3.7c0.7,0.5,1.3,0.7,1.7,0.4c0.4-0.2,0.7-0.9,0.7-1.9c0-1-0.2-2.3-0.8-3.7c-0.5-1.2-1.4-2.4-2.5-3.5
		c0.5-0.8,1.1-1.9,2-3.2c0.7-0.9,1.5-2,2.5-3c1-1,2.2-2,3.7-2.8c2.8-1.7,6.4-2.7,10.1-2.2c3.7,0.5,7.5,2.4,10,5.2
		c1.3,1.4,2.2,3,2.8,4.7C353.7,33.9,353.9,35.7,353.8,37.4z"
          />
        </g>
      </svg>
    </Box>
  )
}
