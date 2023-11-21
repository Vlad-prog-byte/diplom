import React from 'react';
import { Box, ThemeProvider } from '@mui/material';

// import Header from './components/Header/Header';
import { theme } from './themes/theme';
// import AppRoutes from './components/AppRoutes/AppRoutes';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { Header } from 'conference-component-library';


function App() {
  const geturl = null;
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        {/* <Header url={geturl}/> */}
        <Header/>
        <Box sx={{ display: "flex"}}>
          <SideBar/>
          <Main/>
        </Box>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
