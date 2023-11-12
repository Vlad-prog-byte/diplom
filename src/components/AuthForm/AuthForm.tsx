import { Box, Button, FormControl, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent } from 'react'
import { useSelector } from 'react-redux';
import { getAuthPassword, getAuthUsername } from '../../store/entities/auth/selectors/authSelectors';
import { fetchOauth } from '../../store/entities/auth/services/fetchAuthentificate';
import { authActions } from '../../store/entities/auth/slice/authSlice';
import { useAppDispatch } from '../../store/store';

const AuthForm = () => {
    const dispatch = useAppDispatch()
    const username = useSelector(getAuthUsername);
    const password = useSelector(getAuthPassword);
    
    const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(authActions.setUsername(e.target.value));
    } 

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(authActions.setPassword(e.target.value));
    }

    const onAuthSubmit = (e: FormEvent) => {
      e.preventDefault();
      const data = { username, password };
      //Авторизация
    }

    const onOauth = (e: FormEvent) => {
      e.preventDefault();
      dispatch(fetchOauth());
    }



  return (
    <Box sx={{width: "100%", height: "100%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <FormControl
          onSubmit={onAuthSubmit}
        >
        <TextField
          label='Логин'
          value={username}
          onChange={onUsernameChange}
        />
        <br />
        <TextField
          label='Пароль'
          type='password'
          value={password}
          onChange={onPasswordChange}
        />
        <br />
        <Button
          size='large'
          type='submit'
          variant='contained'
        >
          Войти
        </Button>
        </FormControl>
        <br />
        <br />
        <Button
          size='large'
          type='submit'
          variant='contained'
          onClick={onOauth}
        >
          Центр Авторизации ИУ5
        </Button>
    </Box>
    )
};

export default AuthForm;