import React, {useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import { withRouter } from 'react-router-dom';
import FixedPlugin from '../components/FixedPlugin';
import Collapse from "@material-ui/core/Collapse/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PublicIcon from '@material-ui/icons/Public';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import {DrawerContext,GlobalExpandContext,PageNameContext,FunctionExpandContext,ThemePalleteContext} from '../components/Store'
const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
   

  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    paddingLeft: 45,
  },
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
    height: '100vh',
    position: 'sticky',
    top: 0,
    background: ((theme.palette.themeType === 'gradient') ? theme.palette.secondary.mainGradient : theme.palette.secondary.main),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

  },
  drawerPaperClose: {
    overflowX: 'hidden',
    height: '100vh',
    position: 'sticky',
    top: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  }, iconStyle: {

    fontSize: 30,
    cursor: 'pointer',
    margin: 5,
    color: theme.palette.text.icon,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed

  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  toolbarText: {
    float:'left',
    display:'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
    color:theme.palette.primary.contrastText,
    margin:'30px 0px 20px 60px',
    ...theme.mixins.toolbar,
  },
  navBarText: {
    color: theme.palette.primary.contrastText
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nestedSecond: {
    paddingLeft: theme.spacing(8)
  },

}));


function Homepage(props) {

  const classes = useStyles();
  const [open,setOpen] = useContext(DrawerContext)
  const [globalExpand, setGlobalExpand] = useContext(GlobalExpandContext);
  const [pageName] = useContext(PageNameContext);
  const [functionExpand, setFunctionExpand] = useContext(FunctionExpandContext);
  const [themePalette, setThemePalette] = useContext(ThemePalleteContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setFunctionExpand();
    setGlobalExpand();
    setOpen(false);
  };

  const handleGlobalExpand = () => {
    handleDrawerOpen();
    setGlobalExpand(!globalExpand);
  }
  const handleFunctionExpand = () => {
    handleDrawerOpen();
    setFunctionExpand(!functionExpand);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div className={classes.root}>
        <AppBar position="fixed" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
        

            <MenuIcon
              edge="start"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)} />

            <Typography component="h1" variant="h5" noWrap className={classes.title}>
              {pageName}
            </Typography>

            <Tooltip title="Change Theme" arrow>

              <IconButton onClick={ ()=> setThemePalette(!themePalette)}>
                <ColorLensIcon className={classes.iconStyle} />
              </IconButton>
            </Tooltip>

            {themePalette ? <FixedPlugin /> : <div />}




            <Tooltip title="Back" arrow>

              <IconButton aria-label="goBack" onClick={() => { props.history.goBack() }}>
                <ArrowBackIcon
                  className={classes.iconStyle}

                />
              </IconButton>
            </Tooltip>



          </Toolbar>

        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open} >

          {open ?           <div>
          <div className={classes.toolbarText}>
            <Typography variant='h6'>
              
              Magna
            </Typography>
          </div>
          <div className={classes.toolbarIcon}>
            <Tooltip title="Collapse" arrow>
              <IconButton onClick={handleDrawerClose} aria-label="collapse">
                <CloseIcon className={classes.iconStyle} />
              </IconButton>
            </Tooltip>
         
          
          </div>
          </div> :<div className={classes.toolbarIcon}/>}


          <Divider />
          <List>

            <ListItem >
              <ListItemIcon >
                <Avatar className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Hi, Vibhuti" className={classes.navBarText} />
            </ListItem>
          
          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => { props.history.push("/home/dashboard") }}>

              <ListItemIcon >
                <DashboardIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" className={classes.navBarText} />
            </ListItem>


            <ListItem button onClick={handleGlobalExpand}>
              <ListItemIcon >
                <PublicIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Global Functions" className={classes.navBarText} />
              {globalExpand ?
                <ListItemIcon >
                  <ExpandLess className={classes.iconStyle} />
                </ListItemIcon>
                :
                <ListItemIcon >
                  <ExpandMore className={classes.iconStyle} />
                </ListItemIcon>}
            </ListItem>

            <Collapse in={globalExpand} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={handleFunctionExpand}>
                  <ListItemIcon >
                    <TrendingUpIcon className={classes.iconStyle} />
                  </ListItemIcon>
                  <ListItemText primary="OSS" className={classes.navBarText} />
                  {functionExpand ?
                <ListItemIcon >
                  <ExpandLess className={classes.iconStyle} />
                </ListItemIcon>
                :
                <ListItemIcon >
                  <ExpandMore className={classes.iconStyle} />
                </ListItemIcon>}
                </ListItem>
              </List>
            </Collapse>

            <Collapse in={functionExpand} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nestedSecond} onClick={()=>{props.history.push("/home/hub")}} >
                <ListItemIcon>
                <EqualizerIcon className={classes.iconStyle} />
                </ListItemIcon>
                  <ListItemText primary="HUB" className={classes.navBarText} />
                </ListItem>
              </List>

              <List component="div" disablePadding>
                <ListItem button className={classes.nestedSecond} >
                  <ListItemIcon >
                  <DonutLargeIcon className={classes.iconStyle} />
                  </ListItemIcon>
                  <ListItemText primary="RPS" className={classes.navBarText} />
                </ListItem>
              </List>
              
              <List component="div" disablePadding>
                <ListItem button className={classes.nestedSecond} >
                  <ListItemIcon >
                  <DonutSmallIcon className={classes.iconStyle} />
                  </ListItemIcon>
                  <ListItemText primary="OBS" className={classes.navBarText} />
                </ListItem>
              </List>

              <List component="div" disablePadding>
                <ListItem button className={classes.nestedSecond} >
                  <ListItemIcon >
                  <BubbleChartIcon className={classes.iconStyle} />
                  </ListItemIcon>
                  <ListItemText primary="HOGAN" className={classes.navBarText} />
                </ListItem>
              </List>
            </Collapse>


          </List>
          <Divider />
          <List>
            <ListItem button onClick={() => { props.history.push("/") }}>
              <ListItemIcon>
                <ExitToAppIcon className={classes.iconStyle} />
              </ListItemIcon>
              <ListItemText primary="Signout" className={classes.navBarText} />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  )
}


export default withRouter(Homepage)
