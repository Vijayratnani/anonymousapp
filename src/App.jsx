import Main from "./screen/Main"
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
// import ChartComponent from './components/ChartComponent';

function App() {

  return (<>
      <Main/>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <ChartComponent /> */}
    </ThemeProvider>
      </>
  )
}

export default App
