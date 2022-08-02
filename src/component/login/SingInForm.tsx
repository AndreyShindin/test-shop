import * as React from 'react';
import {Avatar, Button, TextField, FormControlLabel, Checkbox, Box, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { DialogActions, DialogContent, DialogTitle, Stack } from '@mui/material';
import RestoreForm from './RestoreForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hook';
import { inputUser } from '../../store/userReducer';


export default function SignInForm(props: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [rest, setRest] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleNavigate = () => {
    dispatch(inputUser())
    navigate('/user/client');
    props.close();
  }


  return ( 
    <>
      {rest ? <RestoreForm setRest={setRest} close={props.close}/> :
      (<>
        <DialogTitle component='div' sx={{textAlign: 'center'}}>
            <Avatar sx={{ m: 1, mr: "auto", ml: "auto", bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
            Вход
            </Typography>
        </DialogTitle>
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Запомнить"
                />
            </DialogContent>
            <DialogActions sx={{flexDirection: 'column'}}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleNavigate}>
                    Войти
                </Button>
                <Stack spacing={2} sx={{textAlign: 'center'}} mb={2}>
                  <Button  size='small' onClick={() => setRest(true)}>
                    Забыли пароль
                  </Button>
                  <Button onClick={() => props.setSing(false)} size='small'>
                      {"У вас нет учетной записи? Зарегистрируйтесь"}
                  </Button>
            </Stack>
            </DialogActions>
        </Box>
      </>)}
    </>
  );
}