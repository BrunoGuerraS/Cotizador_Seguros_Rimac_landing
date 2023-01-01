import { Progress, Box, Text, Image, Container, Button } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import Header from '../../components/Header'
import iBanck from '../../assets/icon_Back.png'
import CountSection from './components/CountSection'
import CarInfo from './components/CarInfo'
import Coverture from './components/Coverture/Coverture'

export default function SalesPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <>
      <Header />
      <Box
        m={'20px 30px'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Image src={iBanck} />
        <Text fontSize={'12px'}>Paso 2 de 2</Text>
        <Progress
          w={'160px'}
          borderRadius={'20px'}
          value={80}
          colorScheme={'purple'}
          height={'6px'} />
      </Box>

      <CarInfo/>

      <form>
      <CountSection requister={register} errors={errors}/>

      <Text p={'0 35px'} m={'0 0 30px 0'}>Agrega o quita coberturas</Text>
        <Coverture requister={register} errors={errors}/>

      </form>
    </>
  )
}
