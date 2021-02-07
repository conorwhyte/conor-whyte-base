import React from 'react';
import { HashRouter } from "react-router-dom";
import Body from './Body';
import SideDrawer from './Drawer';
import Header from './AppBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [darkMode, setDarkMode] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const setMode = () => {
    setDarkMode(!darkMode);
  };

  const darkModeTheme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: 'dark',
          primary: {
            main: '#202020',
            dark: '#202020',
          },
          background: {
            paper: '#202020',
          }
        },
      }),
    [],
  );

  return (
    <HashRouter hashType='noslash' basename='/'>
      <ThemeProvider theme={darkModeTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <Header 
            open={open} 
            handleDrawerOpen={handleDrawerOpen} 
            setDarkMode={setMode} 
          />
          
          <SideDrawer open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
          <Body open={open} />
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
