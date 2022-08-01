import { Box, Stack } from '@mui/material'
import React from 'react'
import NavigationPage from '../navigation-page/NavigationPage'

export default function Admin() {
  const listMenu = [
    {name: 'Добавить продукт'},
    {name: 'Добавить категорию'},
]
  return (
    <Box>
      <Stack direction='row' spacing={3} mt={4}>
        <NavigationPage navMenu={listMenu}/>
      </Stack>
    </Box>
  )
}
