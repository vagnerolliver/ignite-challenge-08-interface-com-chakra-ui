import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  color: {
    dark: { 
      black: '#00000',
      text: '#47585B',
      info: '#99999',
      info50: 'rgba(153, 153, 153, 0.5)'
    },
    light: {
      white: '#fff',
      text: '#F5F8FA',
      info: '#DADADA'
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