import React from 'react';
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
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  return (
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
  );
}

export default App;
