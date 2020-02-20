import React,{useState} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

export const black = createMuiTheme({

    typography: {
      fontSize: 18,
      fontFamily: 'Open Sans',
    },
    palette : {
     
      background : {
        paper :  '#666666' , 
        default:'#3e3e42',  //default background color
    
     },
      primary : {
        main :  '#1a1a1d' , //appbar
        contrastText :  '#ffbf00' //appbar text 
     },
      secondary : {
      
        main :  '#303033' , //sidebar
        contrastText:'#4a4a4f', //table row
      
     },
    
     text : {
        primary :  '#ffbf00' , //text color
        disabled: '#ffbf00', //disabled text color
        secondary:'#ffbf00',
        hint:'#ffbf00',
        icon:'#ffbf00',
       
     }
   }
  });

export const DrawerContext = React.createContext(true);
export const GlobalExpandContext = React.createContext(false);
export const PageNameContext = React.createContext('Hub');
export const FunctionExpandContext = React.createContext(false);
export const ThemePalleteContext = React.createContext(false);


const Store = ({children}) =>{
    
    const [open,setOpen] = useState(true)
    const [globalExpand, setGlobalExpand] = useState(false);
    const [pageName, setPageName] = useState('Hub')
    const [functionExpand, setFunctionExpand] = useState(false);
    const [themePalette, setThemePalette] = useState(false);

    return(
        <DrawerContext.Provider value={[open,setOpen]}>
        <GlobalExpandContext.Provider value ={[globalExpand,setGlobalExpand]}>
        <PageNameContext.Provider value={[pageName,setPageName]}>
        <FunctionExpandContext.Provider value={[functionExpand,setFunctionExpand]}>
        <ThemePalleteContext.Provider value={[themePalette,setThemePalette]}>
            {children}
        </ThemePalleteContext.Provider>
        </FunctionExpandContext.Provider>
        </PageNameContext.Provider>
        </GlobalExpandContext.Provider>
        </DrawerContext.Provider>

    );
}
export default Store;