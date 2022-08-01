import { Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function UserHistory(props: any) {
  return (
    <Stack spacing={3} ml={4}>
      <Typography variant='h6'>
        {props.name}
      </Typography>
      <Paper>
        <Box>
          <Stack>
            ds
          </Stack>
        </Box>
      </Paper>
    </Stack>
  )
}
