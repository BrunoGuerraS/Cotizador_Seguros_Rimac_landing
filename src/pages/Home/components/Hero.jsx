import { Box, Text, Image, Container } from '@chakra-ui/react'
import girl from '../../../assets/girl.svg'

export default function Hero() {
  return (
    <Container 
      bg={'#FAFBFF'} 
      display={'flex'} 
      alignItems={'center'}
      position={'relative'}
      h={'250px'}
      p={'0 35px'}>
    <Box w={'80%'}>
      <Text fontSize={'10px'}>¡NUEVO!</Text>
      <Text 
        fontSize={'26px'}
        lineHeight={'120%'}
        m={'10px 0 15px 0'}>Seguro Vehicular <br/> Tracking</Text>
      <Text fontSize={'14px'}>Cuentanos donde le haras <br/> seguimiento a tu seguro</Text>
    </Box>
    <Image 
      position={'absolute'} 
      right={'0'}
      top={'30px'}
      src={girl}/>

    </Container>
  )
}
