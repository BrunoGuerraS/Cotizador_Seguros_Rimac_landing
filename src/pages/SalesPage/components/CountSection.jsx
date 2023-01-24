import { Progress, Box, Text, Image, Container, Button, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function CountSection({register, errors}) {
  const [montoBase, setMontoBase] = useState(14300)
  const [isValid, setIsValid] = useState(false)

  useEffect(()=>{
    if (montoBase < 12500){
      setIsValid(true)
      setMontoBase(12500)
    } else if (montoBase > 16500){
      setIsValid(true)
      setMontoBase(16500)
    }
    if (12500 < montoBase && montoBase < 16000){
      setIsValid(false)
      console.log()
    }
  }, [montoBase])

  const onchange = (e) => {
    console.log(e)
  }

  const add = () => {
    if (montoBase)
    setMontoBase(montoBase + 100)
    return montoBase
  }
  const less = () => {
    setMontoBase(montoBase - 100)
    return montoBase
}
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
      <Button onClick={less}>-</Button>
      {/* <Input {...register('montoP', { required: true })}></Input> */}
      <Text >${montoBase}</Text>
      <Button onClick={add}>+</Button>
    </Box>
      {isValid && <span>Monto fuera del rango</span>}
  </Container>
  )
}
