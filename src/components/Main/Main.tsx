import { Box, Button, FormControl, Input, TextField } from '@mui/material';
// import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent } from 'react'
import AppRoutes from '../AppRoutes/AppRoutes';
// import { useSelector } from 'react-redux';
// import { getAuthPassword, getAuthUsername } from '../../store/entities/auth/selectors/authSelectors';
// import { fetchOauth } from '../../store/entities/auth/services/fetchAuthentificate';
// import { authActions } from '../../store/entities/auth/slice/authSlice';
// import { useAppDispatch } from '../../store/store';


const Main: FC = () => {
    return (
      <Box sx={{width: "100%", backgroundColor: "white"}}>
        <AppRoutes/>
      </Box>
    )
}

export default Main;