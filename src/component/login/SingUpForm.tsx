import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function SignUpForm(props: any) {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleNavigate = () => {
    navigate('/user');
    props.close();
  }

  return (
    <>
      <DialogTitle component='div' sx={{textAlign: 'center'}}>
        <Avatar sx={{ m: 1, mr: "auto", ml: "auto", bgcolor: 'secondary.main'}}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
      </DialogTitle>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  autoComplete="given-name"
                  name="login"
                  required
                  fullWidth
                  id="login"
                  label="Логин"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Имя"
                  name="name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Я принимаю условия соглашения"
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{flexDirection: 'column'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleNavigate}
            >
              Зарегистрироваться
            </Button>
            <Button onClick={() => props.setSing(true)}>
              У вас есть уже аккаунт? Войти
            </Button>
          </DialogActions>
      </Box>
  </>
  );
}