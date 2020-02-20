import { createMuiTheme } from '@material-ui/core/styles';

export const blue = createMuiTheme({
  overrides: {
    
     MuiTypography:{
       h6:{
        fontSize:40,
        fontFamily:'Yellowtail',  
       }
     
    }
    },
    typography: {
      fontSize: 22,
      fontFamily: 'Questrial',
          },
    palette : {
      themeType:'gradient',
      background : {
        paper :  '#ffffff' , 
        default:'#ffffff',  //default background color
    
     },
      primary : {
        main :  '#00e5e6' , //appbar
        contrastText :  '#000000' //appbar text
     },
      secondary : {
       
        main :'#000', //sidebar #24d5f5  
        mainGradient : 'linear-gradient(#00c9ff,#92fe9d)',
        contrastText:'#b2f7f7', //table row
      
     },
    
     text : {
        primary :  '#030b17' , //text color
        disabled: '#030b17', //disabled text color
        secondary:'#030b17',
        hint:'#030b17',
        icon:'#000000',
       
       
     }
   }
  });
  
  
  export const dark_blue = createMuiTheme({
    overrides: {
     
       MuiTypography:{
         h6:{
          fontSize:40,
          fontFamily:'Yellowtail',  
         }
       
      }
      },
      typography: {
        fontSize: 22,
        fontFamily: 'Questrial',
            },
  
    palette : {
     
      background : {
        paper :  '#ffffff' , 
        default:'#ffffff',  //default background color
    
     },
      primary : {
        main :  '#06313d' , //appbar 071e3d
        contrastText :  '#ffffff' //appbar text 
     },
      secondary : {
      
        main :  '#1e4550' , //sidebar 030b17
        contrastText:'#b8ecf9', //table row
      
     },
    
     text : {
        primary :  '#030b17' , //text color
        disabled: '#030b17', //disabled text color
        secondary:'#030b17',
        hint:'#030b17',
        icon:'#666666',
       
     }
   }
  });
  
  
  export const black = createMuiTheme({
    overrides: {
      
       MuiTypography:{
         h6:{
          fontSize:40,
          fontFamily:'Yellowtail',  
         }
       
      }
      },
      typography: {
        fontSize: 22,
        fontFamily: 'Questrial',
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
  
  export const red = createMuiTheme({
    overrides: {
      
       MuiTypography:{
         h6:{
          fontSize:40,
          fontFamily:'Yellowtail',  
         }
       
      }
      },
      typography: {
        fontSize: 22,
        fontFamily: 'Questrial',
            },
    
    palette : {
      background : {
        paper :  '#ffffff' , 
        default:'#ffffff',  //default background color
    
     },
      primary : {
        main :  '#e60000' , //appbar
        contrastText :  '#000000' //appbar text 
     },
      secondary : {
      
        main :  '#ffffff' , //sidebar
        contrastText:'#ff3333',  //table row
      
     },
    
     text : {
        primary :  '#3b1128' , //text color
        disabled: '#3b1128', //disabled text color
        secondary:'#3b1128',
        hint:'#3b1128',
        icon:'#000000',
       
     }
   }
  });
  
  export const green = createMuiTheme({
    overrides: {
    
       MuiTypography:{
         h6:{
          fontSize:40,
          fontFamily:'Yellowtail',  
         }
       
      }
      },
      typography: {
        fontSize: 22,
        fontFamily: 'Questrial',
            },
   
    palette : {
      themeType:'gradient',
      background : {
        paper :  '#ffffff' , 
        default:'#ffffff',  //default background color
    
     },
      primary : {
        main :  '#98FB98' , //appbar
        contrastText :  '#000000' //appbar text 
     },
      secondary : {
      
        main :  '#59a170' , //sidebar
        mainGradient : 'linear-gradient(#ade9b5,#6df784)',
        contrastText:'#ccffcc', //table row
      
     },
    
     text : {
        primary :  '#030b17' , //text color
        disabled: '#030b17', //disabled text color
        secondary:'#030b17',
        hint:'#030b17',
        icon:'#000000',
       
       
     }
   }
  });
  