import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
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
    <BrowserRouter>
     <ChakraProvider theme={theme}>
        <App />
     </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
