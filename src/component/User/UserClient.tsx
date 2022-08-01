import { Button, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function UserClient() {
  const dataClient = [
    'ФИО',
    'Телефон',
    'Адрес',
  ]
  return (
    <Box ml={5}>
      <Typography variant='h6'>
        Профиль
      </Typography>
      <Stack spacing={3}>
        <Typography mt={3}>
          Личная информация
        </Typography>
        <Paper>
          <Stack direction='row' spacing={30} p={5}>
            {dataClient.map((item) => {
              return (
                <Box>
                  <Stack spacing={2}>
                    <Stack direction='row' spacing={2}>
                      <Typography>
                        {item}
                      </Typography>
                      <Button sx={{p: 0, fontSize: 12}}>
                        Изменить
                      </Button>
                    </Stack>
                    <Typography>
                      Шиндин
                    </Typography>
                  </Stack>
                </Box>
              )
            })}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  )
}
