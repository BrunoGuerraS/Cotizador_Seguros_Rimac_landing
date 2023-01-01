import { Box, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Select,
  Checkbox
} from '@chakra-ui/react'
import './Form.scss'

export default function FormHome() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const onSubmit = data => console.log(data)



  return (
    <Box
      w={'90%'}
      h={'400px'}
      m={'0 auto'}
      p={'20px'}
      display={'flex'}
      flexDir={'column'} >

      <Text 
        fontSize={'24px'}
        m={'0 0 20px 0'}>Déjanos tus datos</Text>

      <form className="form_home" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.document}>
          <Select id="document"  {...register('document', {
            required: 'llena esto pendejo ',

          })}>
            <option selected value='DNI'>DNI</option>
            <option value='C.E.'>C.E.</option>
            <option value='Passport'>Passport</option>
          </Select>
          <FormErrorMessage>
            {errors.document && errors.document.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.ndoc}>
          <Input {...register('ndoc', { required: 'campo requerido' })} placeholder="Nro. de doc" />
          <FormErrorMessage>
            {errors.ndoc && errors.ndoc.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phone}>
          <Input {...register('phone', { required: 'campo requerido' })} placeholder="Celular" />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.placa}>
          <Input {...register('placa', { required: 'campo requerido' })} placeholder="Placa" />
          <FormErrorMessage>
            {errors.placa && errors.placa.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.conditions}>
          <Checkbox m={'20px 0'} alignItems={'flex-start'} size='md' colorScheme='green'
            {...register('conditions',
              { required: 'acepta los terminos' })
            } >
            Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
          </Checkbox>
          <FormErrorMessage isInvalid={errors.conditions}>
            {errors.conditions && errors.conditions.message}
          </FormErrorMessage>
        </FormControl>

        <Button w={'100%'} mt={4} colorScheme='red' isLoading={isSubmitting} type='submit'>
          Submit
        </Button>
      </form>
    </Box>

  )
}

