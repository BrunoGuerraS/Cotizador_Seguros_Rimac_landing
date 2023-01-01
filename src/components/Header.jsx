import { Image, Box, Container, Text } from '@chakra-ui/react'
import logo from '../assets/LogoRIMAC.svg'
import phone from '../assets/ic_phone.png'

function Header() {
  return (
   <Container 
    p={'0 35px'}
    bg={'#FAFBFF'}
    display={'flex'} 
    justifyContent={'space-between'} 
    alignItems={'center'} 
    h={'58px'} >
        <Image src={logo}/>
        <Box display={'flex'} >
            <Image  src={phone}/>
            <Text m={'0 0px 0 10px'} color={'#6464FA'}>Llamanos</Text>
        </Box>
   </Container>
  )
}

export default Header