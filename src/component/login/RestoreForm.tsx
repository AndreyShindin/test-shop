import { Avatar, Box, Button, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';

export default function RestoreForm(props: any) {
    const [mess, setMess] = useState(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
        });
      };

    const handleClose = () => {
      setMess(true);
      setTimeout(() => {
        props.close()
      }, 2000);
    }

    return (
        <>
          <DialogTitle component='div' sx={{textAlign: 'center'}}>
              <Avatar sx={{ m: 1, mr: "auto", ml: "auto", bgcolor: 'secondary.main'}}>
                  <LockOutlinedIcon/>
              </Avatar>
              <Typography component="h1" variant="h5">
                Восстановление пароля
              </Typography>
          </DialogTitle>
          {mess ?
          (<Box>
            <DialogContent>
              <Typography variant='body2'>
                Передите на адрес указанной электронной почте
              </Typography>
            </DialogContent>
          </Box>): (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <DialogContent>
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                  />
                </DialogContent>
              <DialogActions sx={{flexDirection: 'column'}}>
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={handleClose}>
                      Отправить сообщение
                  </Button>
                  <Button
                      size='small' 
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={() => props.setRest(false)}>
                      Отмена
                  </Button>
              </DialogActions>
          </Box>)}
        </>
      )
}
  
