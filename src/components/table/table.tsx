import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

interface ITableProps {
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const TableContainer: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box
    sx={{
      backgroundColor: 'white',
      borderRadius: 0,
      boxShadow: 'surface',
      mb: 2,
      overflow: 'hidden',
      ...sx,
    }}
  >
    {children}
  </Box>
)

export const TableWrapper: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      overflow: 'auto',
      ...sx,
    }}
  >
    {children}
  </Box>
)

export const Table: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box
    as="table"
    sx={{
      borderCollapse: 'separate',
      borderSpacing: 0,
      fontSize: 0,
      textAlign: 'left',
      lineHeight: 'body',
      m: 0,
      p: 0,
      width: '100%',
      'th, td': {
        padding: 3,
      },
      ...sx,
    }}
  >
    {children}
  </Box>
)

export const Thead: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box as="thead" sx={{ ...sx }}>
    {children}
  </Box>
)

export const Tbody: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box
    as="tbody"
    sx={{
      'tr:nth-of-type(2n+2)': {
        td: {
          backgroundColor: 'white',
          zIndex: 3,
        },
      },
      'tr:nth-of-type(2n+1)': {
        td: {
          backgroundColor: 'oddTableRow',
          zIndex: 3,
        },
      },
      ...sx,
    }}
  >
    {children}
  </Box>
)

export const Tr: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box
    as="tr"
    sx={{
      'td:first-of-type, th:first-of-type': {
        borderRightStyle: 'solid',
        borderRightWidth: '1px',
        fontWeight: 'heading',
        left: 0,
        position: 'sticky',
        zIndex: 2,
      },
      'th:first-of-type': {
        zIndex: 4,
        backgroundColor: 'text',
        borderRightColor: 'blueGreen',
      },
      'td:first-of-type': {
        borderRightColor: 'background',
      },
      ...sx,
    }}
  >
    {children}
  </Box>
)

export const Th: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box
    as="th"
    sx={{
      backgroundColor: 'text',
      color: 'background',
      fontWeight: 500,
      minWidth: 'auto',
      position: 'sticky',
      textTransform: 'capitalize',
      top: 0,
      width: 'auto',
      whiteSpace: 'nowrap',
      zIndex: 1,
      ...sx,
    }}
  >
    {children}
  </Box>
)

export const Td: FunctionComponent<ITableProps> = ({ children, sx }) => (
  <Box
    as="td"
    sx={{
      borderBottom: 'none',
      fontWeight: 'bold',
      wordBreak: 'break-all',
      ...sx,
    }}
  >
    {children}
  </Box>
)
