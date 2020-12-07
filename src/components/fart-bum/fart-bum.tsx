import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

import theme from '../../gatsby-plugin-theme-ui'
const { colors } = theme

interface IFartBumProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const FartBum: FunctionComponent<IFartBumProps> = ({ sx }) => {
  return (
    <Box sx={{ margin: '0 auto', ...sx }}>
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 410 400" width="100%" height="100%">
        <circle
          fill={colors.blueGreen}
          stroke={colors.accent}
          strokeWidth="30"
          strokeMiterlimit="10"
          cx="196.9"
          cy="200.4"
          r="173.7"
        />
        <g>
          <path
            fill={colors.text}
            d="M80.3,91.5c-9.2,9.9-17.1,21-23.6,33C154.1,105.5,334.5,70.2,336,70c14.6,22.6,24.8,47.5,30.2,72.2
		c3.3,1.8,6.1,4.3,8.3,7.1c2,2.7,3.4,5.7,4,8.6c0.7,2.9,0.8,5.8,0.4,8.4c-0.6,5.2-2.8,9-4.7,11.2c-0.4,0.5-0.9,0.9-1.3,1.3
		c4.6-0.2,10.2,1.2,14.7,4.8c2.5,2,4.8,4.7,6.1,8c1.3,3.2,1.9,6.9,1.5,10.3c-0.3,3.5-1.4,6.8-3.1,9.8c-1.7,3-3.9,5.6-6.5,7.5
		c-5.2,3.9-11.3,5.2-16.2,5.2c-1.3,0-2.5-0.1-3.7-0.3c-0.3,1.1-0.6,2.2-1,3.3c0,0.1,0,0.1-0.1,0.2c-0.4,1.1-0.7,2.3-1.1,3.4
		c-0.1,0.2-0.1,0.3-0.2,0.4c-0.4,1-0.7,2.1-1.1,3.1c-0.1,0.2-0.1,0.4-0.2,0.6c-0.4,1-0.8,1.9-1.1,2.9c-0.1,0.2-0.2,0.4-0.3,0.7
		c-0.4,0.9-0.8,1.8-1.2,2.7c-0.1,0.2-0.2,0.5-0.3,0.7c-0.4,0.9-0.8,1.8-1.3,2.6c-0.1,0.2-0.2,0.5-0.3,0.7c-0.4,0.9-0.9,1.7-1.4,2.6
		c-0.1,0.2-0.2,0.4-0.3,0.6c-0.5,0.9-1,1.8-1.5,2.6c-0.1,0.2-0.2,0.3-0.3,0.5c-0.6,0.9-1.2,1.9-1.8,2.8c-0.1,0.1-0.1,0.2-0.2,0.2
		c-2,3-4.2,5.9-6.5,8.6c-0.1,0.1-0.2,0.3-0.4,0.4c-0.6,0.7-1.3,1.5-2,2.2c-0.2,0.2-0.5,0.5-0.7,0.7c-0.6,0.6-1.1,1.2-1.7,1.8
		c-0.3,0.3-0.6,0.6-0.9,0.8c-0.5,0.5-1.1,1-1.7,1.6c-0.3,0.3-0.7,0.6-1,0.9c-0.5,0.5-1.1,0.9-1.6,1.4c-0.4,0.3-0.7,0.6-1.1,0.9
		c-0.5,0.4-1.1,0.9-1.6,1.3c-0.4,0.3-0.8,0.6-1.2,0.9c-0.6,0.4-1.1,0.8-1.7,1.2c-0.4,0.3-0.8,0.6-1.2,0.8c-0.6,0.4-1.1,0.7-1.7,1.1
		c-0.4,0.3-0.9,0.5-1.3,0.8c-0.6,0.4-1.2,0.7-1.8,1c-0.4,0.2-0.9,0.5-1.3,0.7c-0.6,0.3-1.2,0.7-1.9,1c-0.4,0.2-0.9,0.5-1.3,0.7
		c-0.7,0.3-1.3,0.6-2,0.9c-0.4,0.2-0.9,0.4-1.3,0.6c-0.8,0.3-1.5,0.6-2.3,0.9c-0.4,0.1-0.7,0.3-1.1,0.4c-1.2,0.4-2.3,0.8-3.5,1.2
		c-8.1,2.6-15.5,4.5-22.3,5.9c-2,0.4-3.9,0.7-5.7,1.1c-1.8,0.3-3.5,0.5-5.1,0.8c-1.1,0.1-2.2,0.3-3.2,0.4c-1.6,0.2-3.1,0.3-4.6,0.4
		c-0.1,0-0.2,0-0.3,0c-1.6,0.1-3.1,0.2-4.7,0.2c-0.8,0-1.5,0-2.3,0c-2.3,0-4.4,0-6.5-0.2c-2.8-0.2-5.4-0.4-7.8-0.8
		c-0.6-0.1-1.2-0.2-1.8-0.3c-1.8-0.3-3.5-0.7-5.1-1c-1.6-0.4-3.1-0.8-4.6-1.3c-1-0.3-1.9-0.6-2.8-1c-0.9-0.3-1.7-0.7-2.6-1
		c-0.8-0.3-1.6-0.7-2.3-1.1c-0.7-0.3-1.3-0.7-2-1c-0.6,1.4-1.1,2.8-1.7,4.1c-3.5,7.7-19.3,2.4-17.2-6c-0.2,0.2-0.4,0.5-0.6,0.7
		c-3.3,3.4-6.8,6.5-10.5,9.4c-2.2,1.8-4.5,3.4-6.8,5c-1.6,1.1-3.1,2.1-4.8,3.1c-4,2.5-8.2,4.7-12.5,6.8c-1.7,0.8-3.5,1.6-5.2,2.3
		c-1.8,0.7-3.5,1.4-5.3,2.1c-4.5,1.6-9.1,3-13.8,4.1c-1.9,0.4-3.8,0.8-5.6,1.2c-0.9,0.2-1.9,0.3-2.8,0.5c-1.9,0.3-3.8,0.6-5.7,0.8
		c-1.9,0.2-3.9,0.4-5.8,0.5c-3.9,0.2-7.8,0.3-11.7,0.2c-2.9-0.1-5.9-0.3-8.8-0.6s-5.9-0.7-8.8-1.3c-1-0.2-2-0.4-2.9-0.6
		c-1-0.2-2.1-0.4-3.1-0.7c14.2,12.6,30.6,22.7,48.6,29.6c28.2-4,55.1-16.1,76.6-34.5c13.9,6.4,35,11.3,64.8,7.2
		c11.4-1.6,23.6-4.5,36.3-8.6c33.9-11,58.6-36,71.5-72.4c19.6-55.2,7.8-128.7-30.1-187.2l-10.1-15.7l-0.9,0L80.3,91.5z"
          />
          <path fill={colors.midSkin} d="M319.6,283.8c-0.7,0.3-1.3,0.6-2,0.9C318.3,284.4,319,284.1,319.6,283.8z" />
          <path fill={colors.midSkin} d="M329,278.5c-0.6,0.4-1.1,0.7-1.7,1.1C327.8,279.2,328.4,278.8,329,278.5z" />
          <path fill={colors.midSkin} d="M287,293.8c-2,0.4-3.9,0.7-5.7,1.1C283.1,294.5,285.1,294.2,287,293.8z" />
          <path fill={colors.midSkin} d="M322.9,282.1c-0.6,0.3-1.2,0.7-1.9,1C321.6,282.8,322.2,282.5,322.9,282.1z" />
          <path fill={colors.midSkin} d="M326,280.4c-0.6,0.4-1.2,0.7-1.8,1C324.8,281.1,325.4,280.7,326,280.4z" />
          <path fill={colors.midSkin} d="M281.3,294.9c-1.8,0.3-3.5,0.5-5.1,0.8C277.8,295.4,279.5,295.1,281.3,294.9z" />
          <path fill={colors.midSkin} d="M316.3,285.3c-0.8,0.3-1.5,0.6-2.3,0.9C314.8,285.9,315.6,285.6,316.3,285.3z" />
          <path
            fill={colors.midSkin}
            d="M83.4,292.6c0.5,2.9-0.5,5.3-2.1,6.9c92.3,28.3,124.2-27.8,133.5-52.4c-0.4-20.8-7.6-41.5-20.9-57.5
		c-7.4-8.9,9.1-13.9,14.8-7c5,6,9.2,12.5,12.7,19.3c2.5-6,2.9-12.5,1.3-19.4c-2.2-9.5,11.3-17.7,14.1-5.9c3.4,14.6,0,29.9-8.5,42.1
		c4.6,15.1,5.9,31.1,3.7,46.7c8.9,7.4,23.7,12.8,47.9,10.5c33.8-3.1,63.1-17.2,80.4-53.1c-0.8-0.3-1.5-0.6-2.1-0.9
		c-1.5-0.8-2.6-1.6-3-2.2c0,1.7-0.3,3.8-1.1,6.1c-1.1,3.3-3.3,7-6.9,9.8c-3.5,2.9-8.3,4.6-13.1,4.8c-4.8,0.2-9.7-1.2-13.5-3.9
		c-3.8-2.6-6.3-6.2-7.6-9.5c-0.3-0.8-0.6-1.7-0.8-2.4c-0.1,0-0.1,0.1-0.2,0.1c-2,0.8-5.1,1.6-8.8,1.3c-3.7-0.3-8.2-1.7-12-4.9
		c-3.8-3.2-6.5-8.1-7.2-13.3c-0.8-5.2,0.2-10.7,3-14.9c2.1-3.3,4.9-5.6,7.7-7.2c0.3-0.3,0.7-0.6,1-0.9c-1.4-1.4-3-3.8-4.1-7.1
		c-1.1-3.3-1.6-7.6-0.5-12.1c1-4.5,3.8-8.8,7.5-11.9c3.7-3.1,8.5-5.1,13.1-5.4c4.7-0.3,8.7,0.9,11.8,2.2c3,1.2,5.9,3,7.1,5
		c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0,0.1,0,0.2,0.1c1.3-3.8,3.6-7.6,7-10.6c2.4-2.2,5.4-3.9,8.6-5.1c3.3-1.1,6.9-1.6,10.4-1.1
		c3.3,0.4,6.4,1.4,9.2,2.9c-5.5-24.7-15.6-49.6-30.2-72.2c-101.1,67.3-220,74.1-287.1,71.4c-7.3,18.3-11.3,38.3-11.3,59.2
		c0,23.7,5.1,46.2,14.4,66.5c4.6-7,18.4-7,20.1,3.4c1.3,7.8-5.8,12.2-12.2,11.7c1.9,3.2,3.9,6.4,6.1,9.5
		C68.2,284,81.8,283.1,83.4,292.6z M292.7,235.1c-0.1,1.4-12.6,1.3-24.9-0.2c-12.3-1.4-24.4-4.2-23.9-6.9c0.4-2.7,12.7-1.3,24.8,0.8
		C280.7,230.9,292.8,233.7,292.7,235.1z M266,192.9c9.9-6.2,20.5-11.2,21.8-8.8c1.3,2.4-8.5,8.5-18.6,14
		c-10.2,5.5-20.7,10.5-21.4,9.4C247,206.4,256.1,199,266,192.9z M256.4,211.3c9.4-2.6,19.2-3.5,19.7-0.9c0.4,2.7-8.8,4.9-18.2,6.8
		c-9.4,1.8-19,3.5-19.4,2.2C238,218.1,246.9,213.8,256.4,211.3z M98.5,274.6c1.6,10.1-14.8,12.8-16.5,2.6
		C80.4,267,96.9,264.4,98.5,274.6z"
          />
          <path fill={colors.midSkin} d="M272.9,296c-1.6,0.2-3.1,0.3-4.6,0.4C269.8,296.3,271.4,296.1,272.9,296z" />
          <path fill={colors.midSkin} d="M261,296.7c-2.3,0-4.4,0-6.5-0.2C256.6,296.6,258.8,296.7,261,296.7z" />
          <path fill={colors.midSkin} d="M357.7,245.6c-0.4,0.9-0.9,1.7-1.4,2.6C356.8,247.3,357.2,246.4,357.7,245.6z" />
          <path fill={colors.midSkin} d="M268,296.4c-1.6,0.1-3.1,0.2-4.7,0.2C264.8,296.6,266.4,296.5,268,296.4z" />
          <path fill={colors.midSkin} d="M195.5,297.3c-2.2,1.8-4.5,3.4-6.8,5C191,300.8,193.3,299.1,195.5,297.3z" />
          <path fill={colors.midSkin} d="M138.6,322.3c-1.9,0.3-3.8,0.6-5.7,0.8C134.7,322.9,136.7,322.7,138.6,322.3z" />
          <path fill={colors.midSkin} d="M337.5,272c-0.5,0.5-1.1,0.9-1.6,1.4C336.4,272.9,336.9,272.5,337.5,272z" />
          <path fill={colors.midSkin} d="M132.8,323.1c-1.9,0.2-3.9,0.4-5.8,0.5C129,323.5,130.9,323.3,132.8,323.1z" />
          <path fill={colors.midSkin} d="M147.1,320.7c-1.9,0.4-3.8,0.8-5.6,1.2C143.3,321.5,145.2,321.1,147.1,320.7z" />
          <path fill={colors.midSkin} d="M342.7,266.9c-0.6,0.6-1.1,1.2-1.7,1.8C341.6,268.1,342.1,267.5,342.7,266.9z" />
          <path fill={colors.midSkin} d="M340.1,269.6c-0.5,0.5-1.1,1-1.7,1.6C339,270.6,339.6,270.1,340.1,269.6z" />
          <path fill={colors.midSkin} d="M188.6,302.4c-1.6,1.1-3.1,2.1-4.8,3.1C185.5,304.5,187.1,303.5,188.6,302.4z" />
          <path fill={colors.midSkin} d="M115.3,323.8c-2.9-0.1-5.9-0.3-8.8-0.6C109.5,323.5,112.4,323.7,115.3,323.8z" />
          <path fill={colors.midSkin} d="M166.1,314.6c-1.8,0.7-3.5,1.4-5.3,2.1C162.6,316,164.4,315.3,166.1,314.6z" />
          <path fill={colors.midSkin} d="M334.7,274.3c-0.5,0.4-1.1,0.9-1.6,1.3C333.6,275.1,334.2,274.7,334.7,274.3z" />
          <path fill={colors.midSkin} d="M331.9,276.4c-0.6,0.4-1.1,0.8-1.7,1.2C330.8,277.2,331.3,276.8,331.9,276.4z" />
          <path fill={colors.midSkin} d="M171.4,312.3c-1.7,0.8-3.5,1.6-5.2,2.3C167.9,313.8,169.6,313.1,171.4,312.3z" />
          <path fill={colors.midSkin} d="M183.9,305.5c-4,2.5-8.2,4.7-12.5,6.8C175.7,310.2,179.8,308,183.9,305.5z" />
          <path fill={colors.midSkin} d="M364.8,227.7c-0.3,1.1-0.7,2.3-1.1,3.4C364.1,230,364.5,228.9,364.8,227.7z" />
          <path fill={colors.midSkin} d="M230,291.1c-0.8-0.3-1.6-0.7-2.3-1.1C228.4,290.4,229.1,290.8,230,291.1z" />
          <path fill={colors.midSkin} d="M363.6,231.6c-0.4,1-0.7,2.1-1.1,3.1C362.9,233.6,363.2,232.6,363.6,231.6z" />
          <path fill={colors.midSkin} d="M362.3,235.2c-0.4,1-0.8,1.9-1.1,2.9C361.5,237.2,361.9,236.2,362.3,235.2z" />
          <path fill={colors.midSkin} d="M232.5,292.1c-0.9-0.3-1.7-0.7-2.6-1C230.8,291.5,231.6,291.8,232.5,292.1z" />
          <path fill={colors.midSkin} d="M360.8,238.8c-0.4,0.9-0.8,1.8-1.2,2.7C360,240.6,360.4,239.7,360.8,238.8z" />
          <path
            fill={colors.midSkin}
            d="M364.9,227.5c0.3-1.1,0.7-2.2,1-3.3c0,0,0,0,0,0C365.6,225.3,365.2,226.4,364.9,227.5z"
          />
          <path fill={colors.midSkin} d="M206,287.9c-3.3,3.4-6.8,6.5-10.5,9.4C199.2,294.4,202.7,291.3,206,287.9z" />
          <path fill={colors.midSkin} d="M345.4,264c-0.6,0.7-1.3,1.5-2,2.2C344.1,265.5,344.7,264.8,345.4,264z" />
          <path fill={colors.midSkin} d="M106.5,323.2c-2.9-0.3-5.9-0.7-8.8-1.3C100.6,322.5,103.6,322.9,106.5,323.2z" />
          <path
            fill={colors.midSkin}
            d="M91.6,320.6C91.6,320.6,91.6,320.6,91.6,320.6c1,0.2,2.1,0.5,3.1,0.7C93.7,321.1,92.7,320.9,91.6,320.6z"
          />
          <path fill={colors.midSkin} d="M356,248.8c-0.5,0.9-1,1.8-1.5,2.6C355,250.6,355.5,249.7,356,248.8z" />
          <path fill={colors.midSkin} d="M354.1,251.9c-0.6,0.9-1.2,1.9-1.8,2.8C353,253.8,353.6,252.9,354.1,251.9z" />
          <path fill={colors.midSkin} d="M352.2,255c-2,3-4.2,5.9-6.5,8.6C348.1,260.9,350.2,258,352.2,255z" />
          <path fill={colors.midSkin} d="M254.5,296.5c-2.8-0.2-5.4-0.4-7.8-0.8C249.1,296.1,251.8,296.3,254.5,296.5z" />
          <path
            fill={colors.midSkin}
            d="M287,293.8c6.9-1.4,14.3-3.3,22.3-5.9c1.2-0.4,2.4-0.8,3.5-1.2c-1.2,0.4-2.3,0.8-3.5,1.2
		C301.3,290.5,293.9,292.4,287,293.8z"
          />
          <path fill={colors.midSkin} d="M359.3,242.2c-0.4,0.9-0.8,1.8-1.3,2.6C358.5,244,358.9,243.1,359.3,242.2z" />
          <path fill={colors.midSkin} d="M244.9,295.4c-1.8-0.3-3.5-0.7-5.1-1C241.4,294.8,243.1,295.1,244.9,295.4z" />
          <path fill={colors.midSkin} d="M235.3,293.1c-1-0.3-1.9-0.6-2.8-1C233.4,292.5,234.3,292.8,235.3,293.1z" />
          <path
            fill={colors.darkSkin}
            d="M97.7,321.9c2.9,0.5,5.9,1,8.8,1.3s5.9,0.5,8.8,0.6c3.9,0.1,7.8,0.1,11.7-0.2c1.9-0.1,3.9-0.3,5.8-0.5
		c1.9-0.2,3.8-0.5,5.7-0.8c1-0.2,1.9-0.3,2.8-0.5c1.9-0.3,3.8-0.7,5.6-1.2c4.7-1.1,9.3-2.5,13.8-4.1c1.8-0.6,3.6-1.3,5.3-2.1
		c1.8-0.7,3.5-1.5,5.2-2.3c4.3-2,8.5-4.3,12.5-6.8c1.6-1,3.2-2,4.8-3.1c2.3-1.6,4.6-3.3,6.8-5c3.7-2.9,7.2-6.1,10.5-9.4
		c0.2-0.2,0.4-0.4,0.6-0.7c0.1-0.4,0.2-0.8,0.4-1.2c5.5-12.2,8-25.6,7.7-39c-9.3,24.7-41.2,80.7-133.5,52.4
		c-1.9,1.9-4.6,2.8-7.3,2.8c5.4,6.6,11.3,12.7,17.7,18.4c1,0.2,2.1,0.5,3.1,0.7C95.7,321.5,96.7,321.7,97.7,321.9z"
          />
          <path
            fill={colors.darkSkin}
            d="M360.2,222.8c-17.2,36-46.5,50.1-80.4,53.1c-24.2,2.2-39-3.1-47.9-10.5c-1.1,8.1-3.2,16-6.3,23.7
		c0.6,0.3,1.3,0.7,2,1c0.7,0.4,1.5,0.7,2.3,1.1c0.8,0.3,1.7,0.7,2.6,1c0.9,0.3,1.8,0.6,2.8,1c1.4,0.5,3,0.9,4.6,1.3s3.3,0.7,5.1,1
		c0.6,0.1,1.2,0.2,1.8,0.3c2.4,0.4,5.1,0.6,7.8,0.8c2.1,0.1,4.2,0.2,6.5,0.2c0.8,0,1.5,0,2.3,0c1.5,0,3.1-0.1,4.7-0.2
		c0.1,0,0.2,0,0.3,0c1.5-0.1,3-0.2,4.6-0.4c1-0.1,2.1-0.2,3.2-0.4c1.7-0.2,3.4-0.5,5.1-0.8c1.9-0.3,3.8-0.7,5.7-1.1
		c6.9-1.4,14.3-3.3,22.3-5.9c1.2-0.4,2.4-0.8,3.5-1.2c0.4-0.1,0.7-0.3,1.1-0.4c0.8-0.3,1.6-0.6,2.3-0.9c0.4-0.2,0.9-0.4,1.3-0.6
		c0.7-0.3,1.4-0.6,2-0.9c0.5-0.2,0.9-0.4,1.3-0.7c0.6-0.3,1.3-0.6,1.9-1c0.4-0.2,0.9-0.5,1.3-0.7c0.6-0.3,1.2-0.7,1.8-1
		c0.4-0.3,0.9-0.5,1.3-0.8c0.6-0.4,1.2-0.7,1.7-1.1c0.4-0.3,0.8-0.6,1.2-0.8c0.6-0.4,1.1-0.8,1.7-1.2c0.4-0.3,0.8-0.6,1.2-0.9
		c0.6-0.4,1.1-0.8,1.6-1.3c0.4-0.3,0.7-0.6,1.1-0.9c0.6-0.5,1.1-0.9,1.6-1.4c0.3-0.3,0.7-0.6,1-0.9c0.6-0.5,1.1-1,1.7-1.6
		c0.3-0.3,0.6-0.6,0.9-0.8c0.6-0.6,1.2-1.2,1.7-1.8c0.2-0.2,0.5-0.5,0.7-0.7c0.7-0.7,1.3-1.4,2-2.2c0.1-0.1,0.2-0.3,0.4-0.4
		c2.3-2.7,4.5-5.6,6.5-8.6c0.1-0.1,0.1-0.2,0.2-0.2c0.6-0.9,1.2-1.8,1.8-2.8c0.1-0.2,0.2-0.3,0.3-0.5c0.5-0.9,1-1.7,1.5-2.6
		c0.1-0.2,0.2-0.4,0.3-0.6c0.5-0.9,0.9-1.7,1.4-2.6c0.1-0.2,0.2-0.5,0.3-0.7c0.4-0.9,0.9-1.8,1.3-2.6c0.1-0.2,0.2-0.5,0.3-0.7
		c0.4-0.9,0.8-1.8,1.2-2.7c0.1-0.2,0.2-0.4,0.3-0.7c0.4-1,0.8-1.9,1.1-2.9c0.1-0.2,0.2-0.4,0.2-0.6c0.4-1,0.8-2.1,1.1-3.1
		c0.1-0.1,0.1-0.3,0.2-0.4c0.4-1.1,0.7-2.3,1.1-3.4c0-0.1,0-0.1,0.1-0.2c0.3-1.1,0.7-2.2,1-3.3C363.7,223.9,361.8,223.3,360.2,222.8
		z"
          />
          <path
            fill={colors.text}
            d="M72.1,270.5C70.4,260,56.6,260,52,267c2.4,5.2,5,10.2,7.9,15.1C66.3,282.7,73.3,278.3,72.1,270.5z"
          />
          <path fill={colors.text} d="M98.5,274.6c-1.6-10.1-18.1-7.5-16.5,2.6C83.7,287.3,100.2,284.7,98.5,274.6z" />
          <path
            fill={colors.text}
            d="M81.2,299.5c1.7-1.6,2.6-4,2.1-6.9c-1.5-9.5-15.1-8.5-17.4-0.9c2.5,3.6,5.2,7.2,8,10.6
		C76.6,302.3,79.4,301.3,81.2,299.5z"
          />
          <path
            fill={colors.text}
            d="M228.2,218.7c-0.8,1.1-1.6,2.2-2.4,3.2c-7.7,9.4-15.2-4.8-9.1-12.2c2.1-2.5,3.6-5.1,4.8-7.8
		c-3.5-6.8-7.7-13.3-12.7-19.3c-5.8-6.9-22.3-1.9-14.8,7c13.3,15.9,20.4,36.7,20.9,57.5c0.3,13.4-2.2,26.8-7.7,39
		c-0.2,0.4-0.3,0.8-0.4,1.2c-2.1,8.4,13.8,13.6,17.2,6c0.6-1.4,1.2-2.8,1.7-4.1c3.1-7.7,5.1-15.6,6.3-23.7
		C234.1,249.7,232.8,233.7,228.2,218.7z"
          />
          <path
            fill={colors.text}
            d="M225.8,221.9c0.9-1,1.7-2.1,2.4-3.2c8.6-12.1,11.9-27.5,8.5-42.1c-2.7-11.8-16.3-3.6-14.1,5.9
		c1.6,6.9,1.3,13.4-1.3,19.4c-1.1,2.7-2.7,5.3-4.8,7.8C210.5,217.1,218,231.2,225.8,221.9z"
          />
          <path
            fill={colors.lightSkin}
            d="M336,70c-1.5,0.2-181.8,35.5-279.2,54.5c-2.9,5.4-5.6,11.1-7.8,16.8C115.9,144.1,234.9,137.3,336,70z"
          />
          <path
            fill={colors.background}
            d="M321.6,155.3c-2.9-0.7-6.3-1.4-9.6-1.1c-3.3,0.3-6.9,1.7-9.8,3.9c-2.9,2.2-5.2,5.3-6.3,8.6
		c-1.2,3.3-1.3,6.8-0.8,9.7c0.5,3.4,1.6,5.9,2.4,7.6c3.4-1.2,6.4-1.3,8.5-0.9c2.2,0.4,3.2,1.3,3.1,1.9c-0.2,1.4-4.7,1.1-9.9,4.1
		c-2.6,1.4-5.3,3.7-7.2,6.7c-1.8,3-2.7,6.9-2.2,10.8c0.4,3.9,2.2,7.6,4.7,10.3c2.6,2.7,6,4.3,9,5c3.1,0.8,5.8,0.7,7.7,0.5
		c0.1,0,0.2,0,0.4,0c-0.2-1.5-0.2-2.9-0.1-4c0.3-2,1-3.1,1.7-3c1.4,0.1,1.6,4.2,4.4,9c1.4,2.4,3.4,4.9,6.2,6.7
		c2.7,1.8,6.3,2.9,9.9,2.9c3.6,0,7.3-1,10.1-2.9c2.9-1.9,5.1-4.5,6.5-7.1c2.9-5.2,2.7-9.6,3.4-9.6c0.3,0,0.8,1,1.1,3
		c0,0.3,0.1,0.6,0.1,0.9c0.6-0.3,2-0.1,4.1,0.2c2.5,0.3,6,0.8,10.2,0.4c4.1-0.4,8.8-1.7,12.7-4.8c1.9-1.5,3.6-3.4,4.8-5.7
		c1.3-2.3,2.1-4.8,2.5-7.4c0.4-2.6,0.1-5.2-0.8-7.5c-0.8-2.3-2.3-4.4-4.1-6.1c-3.7-3.4-8.5-4.9-12.7-4.9c-4.2-0.1-7.8,1.1-10.2,2.1
		c-2.4,1-3.8,1.7-4,1.5c-0.2-0.2,0.7-1.6,3-3.2c2.1-1.5,5.3-3.2,9.7-3.9c0.1-0.7,0.7-1.9,1.3-3.4c1-2.3,2.1-5.7,2.2-9.8
		c0.1-4.1-1-8.9-4.1-12.8c-3.1-3.9-8-7-13.3-7.8c-5.3-0.8-10.8,0.9-14.9,4.1c-2.1,1.6-3.8,3.5-5.1,5.5c-1.3,2-2.1,4.2-2.6,6.3
		c-1,4.3-1,8.2-1.2,10.8c-0.1,2.7-0.3,4.3-0.6,4.3c-0.3,0-0.9-1.5-1.4-4.2c-0.5-2.7-1.2-6.7-0.6-11.7c0.1-0.6,0.1-1.1,0.3-1.7
		c-0.6-0.1-1.2-0.8-2.2-1.4C326.7,156.8,324.7,156.1,321.6,155.3z"
          />
          <path
            fill={colors.background}
            d="M295.6,184.6C295.6,184.6,295.5,184.6,295.6,184.6c-0.4,0.2-0.8,0.5-1.1,0.8c0.4-0.2,0.9-0.5,1.3-0.7
		C295.7,184.7,295.7,184.7,295.6,184.6z"
          />
          <path
            fill={colors.background}
            d="M330.9,156c-0.1,0-0.1,0-0.2-0.1c0,0.1,0.1,0.2,0.1,0.3C330.9,156.1,330.9,156.1,330.9,156z"
          />
          <path
            fill={colors.text}
            d="M243.8,228c-0.4,2.7,11.6,5.4,23.9,6.9c12.3,1.4,24.7,1.5,24.9,0.2c0.1-1.4-11.9-4.1-24-6.2
		C256.5,226.8,244.3,225.3,243.8,228z"
          />
          <path
            fill={colors.text}
            d="M257.9,217.2c9.4-1.9,18.7-4.1,18.2-6.8c-0.4-2.7-10.3-1.8-19.7,0.9c-9.5,2.6-18.4,6.8-17.9,8.1
		C238.9,220.7,248.5,219,257.9,217.2z"
          />
          <path
            fill={colors.text}
            d="M269.2,198.1c10.1-5.6,20-11.7,18.6-14c-1.3-2.4-11.9,2.6-21.8,8.8c-9.9,6.2-19,13.5-18.3,14.6
		C248.5,208.6,259,203.6,269.2,198.1z"
          />
          <path
            fill={colors.text}
            d="M311.7,222.5c-0.1,0-0.2,0-0.4,0c-1.9,0.2-4.7,0.2-7.7-0.5c-3-0.7-6.4-2.3-9-5c-2.6-2.6-4.3-6.4-4.7-10.3
		c-0.4-3.9,0.4-7.8,2.2-10.8c1.8-3.1,4.6-5.3,7.2-6.7c5.3-2.9,9.7-2.6,9.9-4.1c0.1-0.6-1-1.4-3.1-1.9c-2-0.4-5.1-0.3-8.5,0.9
		c0.6,1.3,1,2,0.7,2.2c-0.2,0.2-1.2-0.3-2.5-1.5c-0.4,0.2-0.9,0.4-1.3,0.7c-2.8,1.5-5.6,3.9-7.7,7.2c-2.7,4.3-3.8,9.8-3,14.9
		c0.8,5.2,3.4,10.1,7.2,13.3c3.8,3.2,8.2,4.6,12,4.9c3.8,0.3,6.9-0.5,8.8-1.3c0.1,0,0.1-0.1,0.2-0.1
		C311.9,223.7,311.8,223.1,311.7,222.5z"
          />
          <path
            fill={colors.text}
            d="M354.7,218.7c0.1-0.1,0.2-0.2,0.3-0.3c0-0.3,0-0.7-0.1-0.9c-0.3-2-0.8-3-1.1-3c-0.8,0-0.5,4.5-3.4,9.6
		c-1.4,2.5-3.6,5.2-6.5,7.1c-2.9,1.9-6.5,2.9-10.1,2.9c-3.6,0-7.2-1.1-9.9-2.9c-2.8-1.8-4.8-4.3-6.2-6.7c-2.8-4.8-3-8.9-4.4-9
		c-0.6-0.1-1.4,1-1.7,3c-0.1,1.1-0.2,2.5,0.1,4c0.1,0.6,0.2,1.2,0.4,1.9c0.2,0.8,0.5,1.6,0.8,2.4c1.3,3.3,3.8,6.9,7.6,9.5
		c3.8,2.7,8.7,4.1,13.5,3.9c4.8-0.2,9.6-1.9,13.1-4.8c3.6-2.8,5.8-6.5,6.9-9.8c0.8-2.3,1.1-4.3,1.1-6.1
		C354.7,219.3,354.6,218.9,354.7,218.7z"
          />
          <path
            fill={colors.text}
            d="M370.3,180c-0.2-0.2-0.2-0.5-0.1-0.9c-4.3,0.7-7.6,2.5-9.7,3.9c-2.3,1.6-3.2,3-3,3.2c0.2,0.3,1.6-0.5,4-1.5
		c2.4-1,5.9-2.1,10.2-2.1c4.2,0,9,1.5,12.7,4.9c1.8,1.7,3.3,3.8,4.1,6.1c0.8,2.3,1.1,5,0.8,7.5c-0.3,2.6-1.2,5.1-2.5,7.4
		c-1.3,2.2-3,4.2-4.8,5.7c-3.8,3-8.6,4.4-12.7,4.8c-4.1,0.4-7.7-0.1-10.2-0.4c-2.1-0.3-3.5-0.5-4.1-0.2c-0.1,0.1-0.2,0.1-0.3,0.3
		c-0.1,0.2,0,0.6,0.3,0.9c0.5,0.6,1.5,1.4,3,2.2c0.6,0.3,1.3,0.6,2.1,0.9c1.6,0.6,3.5,1.1,5.7,1.4c0,0,0,0,0,0
		c1.1,0.2,2.4,0.3,3.7,0.3c4.9,0,11-1.2,16.2-5.2c2.6-2,4.9-4.6,6.5-7.5c1.6-3,2.7-6.3,3.1-9.8c0.4-3.5-0.2-7.1-1.5-10.3
		c-1.3-3.3-3.6-6-6.1-8c-4.6-3.7-10.1-5-14.7-4.8C371.6,180,370.6,180.3,370.3,180z"
          />
          <path
            fill={colors.text}
            d="M346.6,140.4c-3.3,1.1-6.2,2.9-8.6,5.1c-3.5,3-5.8,6.8-7,10.6c0,0.1,0,0.1-0.1,0.2c0.3,0.7,0.3,1.3,0.3,1.7
		c-0.1,0.6-0.4,1-0.7,1c-0.1,0-0.2,0-0.3,0c-0.1,0.6-0.2,1.2-0.3,1.7c-0.6,5,0.1,9,0.6,11.7c0.5,2.7,1.1,4.2,1.4,4.2
		c0.3,0,0.5-1.6,0.6-4.3c0.1-2.7,0.1-6.6,1.2-10.8c0.5-2.1,1.3-4.3,2.6-6.3c1.3-2,3-4,5.1-5.5c4.1-3.2,9.7-5,14.9-4.1
		c5.3,0.7,10.2,3.8,13.3,7.8c3.1,3.9,4.2,8.7,4.1,12.8c-0.1,4.1-1.2,7.5-2.2,9.8c-0.6,1.5-1.1,2.6-1.3,3.4c-0.1,0.4-0.1,0.7,0.1,0.9
		c0.3,0.3,1.4,0,2.7-1.2c0.4-0.4,0.8-0.8,1.3-1.3c1.9-2.2,4.1-6.1,4.7-11.2c0.3-2.6,0.2-5.4-0.4-8.4c-0.6-3-2.1-6-4-8.6
		c-2.1-2.9-5-5.3-8.3-7.1c-2.8-1.5-5.9-2.6-9.2-2.9C353.5,138.8,349.8,139.2,346.6,140.4z"
          />
          <path
            fill={colors.text}
            d="M295.8,184.8c1.3,1.3,2.3,1.7,2.5,1.5c0.2-0.2-0.1-1-0.7-2.2c-0.8-1.7-1.9-4.2-2.4-7.6
		c-0.4-2.9-0.3-6.4,0.8-9.7c1.1-3.3,3.4-6.4,6.3-8.6c2.9-2.2,6.5-3.6,9.8-3.9c3.3-0.3,6.7,0.4,9.6,1.1c3,0.7,5.1,1.5,6.3,2.2
		c1,0.6,1.6,1.2,2.2,1.4c0.1,0,0.2,0,0.3,0c0.3-0.1,0.6-0.4,0.7-1c0.1-0.4,0-1-0.3-1.7c0-0.1-0.1-0.2-0.1-0.3
		c-0.1-0.2-0.2-0.4-0.3-0.6c-1.2-2.1-4-3.8-7.1-5c-3.1-1.3-7.1-2.5-11.8-2.2c-4.6,0.3-9.4,2.2-13.1,5.4c-3.8,3.1-6.5,7.5-7.5,11.9
		c-1.1,4.5-0.6,8.7,0.5,12.1c1.1,3.3,2.7,5.7,4.1,7.1c0,0,0.1,0.1,0.1,0.1C295.7,184.7,295.7,184.7,295.8,184.8z"
          />
        </g>
      </svg>
    </Box>
  )
}
