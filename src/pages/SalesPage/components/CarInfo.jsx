import { Progress, Box, Text, Image, Container, Button } from '@chakra-ui/react'
import man from '../../../assets/man.svg'


export default function CarInfo() {
  return (
    <Container
    h={'350px'}
    bg={'#FAFBFF'}
    overflow={'hidden'}
    p={'0 30px 0 30px'}>
    <Box m={'35px 0 25px 0'}>
      <Text fontSize={'28px'}>Mira las coberturas</Text>
      <Text m={'5px 0 0 0'} fontSize={'16px'}>Conoce las coberturas para tu plan</Text>
    </Box>
    <Box
      bg={'white'}
      display={'flex'}
      alignItems={'center'}
      // justifyContent={'space-around'}
      h={'146px'}
      position={'relative'}
    >
      <Box p={'0 0 0 30px'}>
        <Text fontSize={'12px'} color={'#A9AFD9'}>Placa: C2U-114</Text>
        <Text>Wolkswagen 2019 <br />Golf</Text>
      </Box>
      <Image
        src={man}
        position={'absolute'}
        right={'0'}
        top={'-10px'}
      />
    </Box>
  </Container>
  )
}
