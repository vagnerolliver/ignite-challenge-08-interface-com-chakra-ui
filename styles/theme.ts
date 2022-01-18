import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    dark: { 
      black: '#00000',
      text: '#47585B',
      info: '#999999',
      info50: 'rgba(153, 153, 153, 0.5)'
    },
    gray: {
      '100': '#F5F8FA', // light text
      '300': '#DADADA', // light info 
      '900': '999999', // dark info
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B'
      }
    }
  }
})