import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

const AppRoutes: FC = () => {
  return (
    <Routes>
        <Route path="/auth" element={ <AuthForm/> } />
    </Routes>
  )
}

export default AppRoutes;
