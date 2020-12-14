import React, { FunctionComponent } from 'react'
import { Grid, Box, SxStyleProp } from 'theme-ui'

const TABLE_ROWS = 8
const TABLE_COLS = 5
const rowArray = new Array(TABLE_ROWS).fill(null)
const colArray = new Array(TABLE_COLS).fill(null)

const GRID_TEMPLATE_COLUMNS = '2fr .7fr 1fr .5fr .3fr'

interface ITableGraphicProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const TableGraphic: FunctionComponent<ITableGraphicProps> = ({ sx }) => {
  return (
    <Box
      sx={{
        borderRadius: 0,
        backgroundColor: 'white',
        boxShadow: 'surface',
        ...sx,
      }}
    >
      <Box sx={{ backgroundColor: 'text', borderTopLeftRadius: 0, borderTopRightRadius: 0, p: 3 }}>
        <Grid sx={{ gridTemplateColumns: GRID_TEMPLATE_COLUMNS, columnGap: 2 }}>
          {colArray.map((_, index) => {
            return (
              <Grid
                key={index}
                sx={{
                  columnGap: 1,
                  gridTemplateColumns: '1fr 8px',
                }}
              >
                <Box sx={{ borderRadius: 0, p: 1, backgroundColor: 'white' }}></Box>
                <Box sx={{ borderRadius: 0, p: 1, backgroundColor: 'primary' }}></Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Grid sx={{ backgroundColor: 'white', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, rowGap: 2, p: 3 }}>
        {rowArray.map((_, index: number) => {
          return (
            <Grid key={index} sx={{ gridTemplateColumns: GRID_TEMPLATE_COLUMNS, columnGap: 2 }}>
              {colArray.map((_, index) => {
                return <Box sx={{ borderRadius: 0, p: 2, backgroundColor: 'background' }}></Box>
              })}
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
