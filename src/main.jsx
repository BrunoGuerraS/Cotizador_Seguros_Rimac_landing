import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const colors = {
   brand: {
     900: '#FF1C44',
     800: '#153e75',
     700: '#2a69ac',
   },
 }

const theme = extendTheme({ colors })
console.log('que fue ')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
        <App />
     </ChakraProvider>
  </React.StrictMode>,
)
