import { Typography } from '@mui/material';
import React, { FC } from 'react'
import ResponseSideBar from '../../themes/ResponsiveSideBar';


const menuItem: Array<string> = ['Главная', 'Вход', 'О нас', 'Лекции', 'Конференции', 'Статьи']


const SideBar: FC = () => {
  return (
    <ResponseSideBar>
        {
            menuItem.map(value => 
                (
                    <Typography variant='body1' sx={{textAlign: "left", fontSize: "inherit"}}>{value}</Typography>
                ))
        }
    </ResponseSideBar>
  )
}

export default SideBar;
