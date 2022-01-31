import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      '300': '#FFBA08'
    },
    light: {
      '100': '#ffffff',
      '200': '#F5F8FA', // text
      '300': '#DADADA', // info
    },
    dark: {
      '100': '#000000',
      '200': '#47585B', // text
      '300': '#999999', // info
      '400': 'rgba(153, 153, 153, 0.5)'
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