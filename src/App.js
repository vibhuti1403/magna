import React, {useState} from 'react';
import './App.css';
import { ThemeProvider} from '@material-ui/core/styles';
import SignIn from './components/SignIn';
import { BrowserRouter as Router , Route } from "react-router-dom";
import Homepage from './components/Homepage';
import AddSolution from './components/AddSolution';
import Solutions from './components/Solutions';
import Hubpage from './components/Hubpage';
import Dashboard from './components/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Switch} from 'react-router-dom';
import Store from './components/Store';
import {black, dark_blue} from './components/helperComponents/Themes';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
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

}));
export const ThemeContext = React.createContext(black);

function App() {
  const classes = useStyles();

  const [theme, setTheme] = useState(dark_blue);
  console.log(theme)
  return (
    <Store>
    <div >

    <ThemeContext.Provider value={[theme,setTheme]}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>

          <Router >
            <Switch>
              <Route path="/home" render={() => <Homepage  />} />
              <Route exact path="/" component={SignIn} />
            </Switch>
            <Switch>
              <Route exact path="/home/dashboard"><Dashboard /></Route>
              <Route exact path="/home/solutions"
                render={
                  (props) => <Solutions {...props} />}
              />
              <Route exact path="/home/addsolution"
                render={
                  (props) => <AddSolution {...props} />}
              />
              <Route path="/home"><Hubpage/></Route>

            </Switch>
          </Router>
        </div>

      </ThemeProvider>
  </ThemeContext.Provider>
    </div>
    </Store>
  );
}

export default App;
