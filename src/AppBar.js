import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LightModeIcon from '@material-ui/icons/BrightnessMediumTwoTone';
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
    darkModeToggle: {
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

    const handleClick = () => {
        return null;
    };

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
            color="inherit"
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
                    <Link color="inherit" href="/" onClick={handleClick}>
                        Conor Whyte
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                        Projects
                    </Link>
                </Breadcrumbs>
                
                <IconButton onClick={setDarkMode} className={classes.darkModeToggle}>
                    <LightModeIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;