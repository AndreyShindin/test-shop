import { Box, Button, Drawer, Grid, Paper, TextField, Typography } from '@mui/material';

export default function DrawerAddres(props: any) {
  return (
    <Drawer open={props.open} anchor='right' onClose={props.handleClose}>
      <Box maxWidth={600} p={4}>
        <Button onClick={props.handleClose}>
          Назад
        </Button>
      <Typography variant="h6" mb={5}>
        Доставка
      </Typography>
      <Typography variant='body2'>
      Мы осуществляем доставку в города и области. Точную стоимость вы можете рассчитать самостоятельно или уточнить у наших менеджеров. Стоимость доставки указана без учета подъема на этаж.
      </Typography>
      <Paper>
        <Grid container spacing={3} p={4}>
        <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="Область"
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Город"
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="street"
              name="street"
              label="Улица"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="home"
              name="home"
              label="Дом"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="flat"
              name="flat"
              label="Кварира"
              autoComplete="shipping postal-code"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="floor"
              name="floor"
              label="Этаж"
              autoComplete="shipping country"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Box> 
          <Button fullWidth>
            Узнасть стоимость доставки
          </Button>
      </Box>
      </Paper>
      </Box>
    </Drawer>
  )
}
