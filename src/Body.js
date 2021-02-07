import clsx from 'clsx';
import { BODY_URL_MAP } from './constants';
import { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      paddingTop: theme.spacing(4),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

const Main = ({open = false}) => {
    const classes = useStyles();
    const [url, setUrlBase] = useState('home');

    const setUrl = useCallback(() => {
      const currentHash = window.location.hash;
      const [, routeText] = currentHash.split('#');
       
      setUrlBase(BODY_URL_MAP[routeText]); 
    }, []);

    useEffect(() => {
        setUrl();
        window.addEventListener("hashchange", setUrl);
        
        return () => {
            window.removeEventListener("hashchange", setUrl);
        };
    }, [setUrl]);

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className="App">
                <iframe title='home-conorwhyte' src={`https://${url || 'www'}.conorwhyte.com/`} />
            </div>
        </main>
    );
}

export default Main;