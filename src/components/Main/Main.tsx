import { Box } from '@mui/material';
import axios from 'axios';// import axios from 'axios';
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { IUser } from '../../mocks/models/User/user';
import AppRoutes from '../AppRoutes/AppRoutes';
// import { useSelector } from 'react-redux';
// import { getAuthPassword, getAuthUsername } from '../../store/entities/auth/selectors/authSelectors';
// import { fetchOauth } from '../../store/entities/auth/services/fetchAuthentificate';
// import { authActions } from '../../store/entities/auth/slice/authSlice';
// import { useAppDispatch } from '../../store/store';



const Main: FC = () => {

    const [user,setUser] = useState<IUser[]>([]);

    useEffect(() => {
      axios.get('/posts').then((res) => setUser(res.data))
    }, []);

    console.log(user);
    return (
      <Box sx={{width: "100%", backgroundColor: "white"}}>
        {!!user ? user.map((value) => {
            return(
              <div>
                <img src={value.avatar} alt="" />
              </div>
            );
        }): null}
        <AppRoutes/>
      </Box>
    )
}

export default Main;