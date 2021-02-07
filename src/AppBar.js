import { useState, useEffect, useCallback } from 'react';
import { NAV_CONTENT } from './constants';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
    },
    socialMedia: {
        marginLeft: 'auto',
        order: 2,
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
}));

const Header = ({open = false, handleDrawerOpen, setDarkMode}) => {
    const classes = useStyles();
    const [ breadcrumb, setBreadcrumb ] = useState();

    const setBreadcrumbText = useCallback(() => {
        const currentHash = window.location.hash;
        const [, routeText] = currentHash.split('#');
        const navItem = NAV_CONTENT.find(({route}) => route === routeText);

        setBreadcrumb(navItem); 
    }, []);

    useEffect(() => {
        setBreadcrumbText();
        window.addEventListener("hashchange", setBreadcrumbText);
        
        return () => {
            window.removeEventListener("hashchange", setBreadcrumbText);
        };
    }, [setBreadcrumbText]);

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            color="primary"
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        Conor Whyte
                    </Link>
                    {!!breadcrumb && (
                        <Link color="inherit" href={`#${breadcrumb.route}`}>
                            {breadcrumb.text}
                        </Link>
                    )}
                </Breadcrumbs>
                
                <span className={classes.socialMedia}>
                    <IconButton href='https://github.com/conorwhyte' >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton href='https://www.linkedin.com/in/conor-whyte/'>
                        <LinkedInIcon />
                    </IconButton>
                </span>
            </Toolbar>
        </AppBar>
    );
};

export default Header;