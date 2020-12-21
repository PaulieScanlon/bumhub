import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { Container, Grid, Box, Divider, Heading, Text, Input, Select, IconButton, Close, Link, Button } from 'theme-ui'
import filesize from 'filesize'

import { TableContainer, TableWrapper, Table, Thead, Tbody, Tr, Th, Td } from '../components/table'
import { Icon } from '../components/icon'
import { Seo } from '../components/seo'
import { useAllBums } from '../hooks/useAllBums'

const ASC = 'asc'
const DSC = 'dsc'

const MIN_ROWS = 6
const TABLE_HEIGHT = 450

const SearchPage: FunctionComponent = () => {
  const [currentSort, setCurrentSort] = useState({
    sortProperty: 'name',
    sortPropertyIsNumber: false,
    sortDirection: ASC,
  })
  const [currentSearch, setCurrentSearch] = useState('')
  const [currentFilter, setCurrentFilter] = useState('name')
  const [isTableExpadned, setIsTableExpanded] = useState(false)

  const [headerData] = useState(useAllBums().keys)
  const [bumData] = useState(useAllBums().data)

  const filteredData = bumData
    .filter((data) => data[currentFilter].value.toLowerCase().includes(currentSearch.toLocaleLowerCase()))
    .sort((a, b) => {
      let { sortProperty, sortPropertyIsNumber, sortDirection } = currentSort

      if (sortDirection === ASC) {
        return sortPropertyIsNumber
          ? a[sortProperty].value - b[sortProperty].value
          : a[sortProperty].value.localeCompare(b[sortProperty].value)
      } else {
        return sortPropertyIsNumber
          ? b[sortProperty].value - a[sortProperty].value
          : b[sortProperty].value.localeCompare(a[sortProperty].value)
      }
    })

  return (
    <>
      <Seo title="Search" />
      <Container>
        <Box>
          <Heading as="h1" variant="styles.h1">
            Bum Search
          </Heading>
          <Text>
            <Text as="span" sx={{ fontWeight: 'bold' }}>
              Gatsby is React.
            </Text>{' '}
            If you can build it with React, you can build it with Gatsby{' '}
            <Box as="span" role="img" aria-label="Index Pointing Up">
              ☝️
            </Box>
          </Text>
        </Box>
        <Divider />
        <Grid
          sx={{
            backgroundColor: ['transparent', 'white'],
            borderRadius: ['0px', 1],
            boxShadow: ['none', 'surface'],
            gridTemplateColumns: ['1fr', '1fr 1px 200px'],
          }}
        >
          <Grid
            sx={{
              alignItems: 'center',
              backgroundColor: ['white', 'transparent'],
              borderRadius: [1, '0px'],
              boxShadow: ['surface', 'none'],
              gridTemplateColumns: ['1fr auto'],
              p: [2, 3],
            }}
          >
            <Input
              title="Input search"
              aria-label="search input"
              placeholder="Search"
              value={currentSearch}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setCurrentSearch(event.target.value)}
              sx={{
                px: 2,
                py: 0,
              }}
            />
            <Close title="Wipe search" aria-label="search clear" onClick={() => setCurrentSearch('')} />
          </Grid>
          <Box sx={{ display: ['none', 'block'], height: '100%', width: '1px', backgroundColor: 'grey' }} />
          <Box
            sx={{
              backgroundColor: ['white', 'transparent'],
              borderRadius: [1, '0px'],
              boxShadow: ['surface', 'none'],
              p: [2, 3],
            }}
          >
            <Select
              title="Select search"
              aria-label="search select"
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setCurrentFilter(event.target.value)}
              sx={{
                px: 2,
                py: 0,
              }}
            >
              <option value="name">Repository name</option>
              <option value="owner">User name</option>
              <option value="language">Language</option>
            </Select>
          </Box>
        </Grid>
        <Divider />
        <TableContainer
          sx={{
            mb: 3,
          }}
        >
          <TableWrapper
            sx={{
              height: isTableExpadned ? 'auto' : filteredData.length > MIN_ROWS ? TABLE_HEIGHT : 'auto',
            }}
          >
            <Table>
              <Thead>
                <Tr>
                  {headerData.map((header: { friendly: string; key: string }, index: number) => {
                    return (
                      <>
                        {header.key !== 'html_url' ? (
                          <Th key={index}>
                            <Grid
                              sx={{
                                alignItems: 'center',
                                gridTemplateColumns: '1fr auto',
                                gridGap: 1,
                              }}
                            >
                              {header.friendly}
                              <IconButton
                                title="Sort search results"
                                aria-label="sort button"
                                onClick={() =>
                                  setCurrentSort({
                                    sortProperty: header.key,
                                    sortPropertyIsNumber: Number.isInteger(bumData[0][header.key].value),
                                    sortDirection: currentSort.sortDirection === ASC ? DSC : ASC,
                                  })
                                }
                              >
                                <Icon
                                  name={
                                    currentSort.sortProperty === header.key
                                      ? currentSort.sortDirection === ASC
                                        ? 'expandLess'
                                        : 'expandMore'
                                      : 'unfoldMore'
                                  }
                                  sx={{ color: 'primary' }}
                                />
                              </IconButton>
                            </Grid>
                          </Th>
                        ) : null}
                      </>
                    )
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {filteredData.map((body, index: number) => {
                  return (
                    <Tr key={index}>
                      {Object.keys(body).map((key, index) => {
                        return (
                          <>
                            {body[key].friendly !== 'html_url' ? (
                              <Td
                                key={index}
                                sx={{
                                  textAlign: Number.isInteger(body[key].value) ? 'right' : 'left',
                                }}
                              >
                                {body[key].friendly === 'repository name' ? (
                                  <Link href={body.html_url.value} target="_blank" rel="noopener">
                                    {body[key].value}
                                  </Link>
                                ) : body[key].friendly === 'size' ? (
                                  filesize(body[key].value, { exponent: 1 })
                                ) : (
                                  body[key].value
                                )}
                              </Td>
                            ) : null}
                          </>
                        )
                      })}
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
            {!filteredData.length ? <Text sx={{ p: 3, textAlign: 'center' }}>No Bums to see here 🍑</Text> : null}
          </TableWrapper>
        </TableContainer>
        {filteredData.length > MIN_ROWS ? (
          <Box
            sx={{
              mb: 3,
            }}
          >
            <Button variant="ghost" onClick={() => setIsTableExpanded(!isTableExpadned)}>
              {`${isTableExpadned ? 'Collapse' : 'Expand'} table`}
              <Icon name={isTableExpadned ? 'expandLess' : 'expandMore'} />
            </Button>
          </Box>
        ) : null}
      </Container>
    </>
  )
}

export default SearchPage
