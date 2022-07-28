import { Box, Grid } from '@mui/material';
import NavigationPage from '../navigation-page/NavigationPage'

export default function User() {
  const userNav = [
    'Пользователь',
    'История покупок',
    'Избранное',
  ]
  return (
    <Box sx={{mt: 4}}>
        <Grid container>
            <Grid item xs={2}>
              {/* <NavigationPage navMenu={userNav}/> */}
            </Grid>
            <Grid item xs={6}>
                b
            </Grid>
        </Grid>
    </Box>
  )
}
