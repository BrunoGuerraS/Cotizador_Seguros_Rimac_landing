import { Progress, Box, Text, Image, Container, Button, Input } from '@chakra-ui/react'


export default function CountSection({register, errors}) {
  return (
    <Container p={'35px'}>
    <Text>Indica la suma asegurada</Text>
    <Text> MIN $12.500 | MAX $16,500</Text>
    <Box 
      
      display={'flex'}
      border={'1px #C5CBE0 solid'}
      justifyContent={'space-between'}
      alignItems={'center'}
      >
      <Button>-</Button>
      <Input {...register('montoP', { required: true })}></Input>
      <Button>+</Button>
    </Box>
  </Container>
  )
}
