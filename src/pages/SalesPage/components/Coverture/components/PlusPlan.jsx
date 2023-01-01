import { Switch, Box, Text, Container, Image } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import icon1 from '../../../../../assets/icon1.svg'

export default function PlusPlan() {
    return (
        <Container p={''}>

            <Box
                p={'0'}
                display={'flex'}
                alignItems={'flex-start'}
                m={'0 0 40px 0px'}>
                <Image m={'0 10px 0 0'} src={icon1} />
                <Box >
                    <Box
                        minW={'211px'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        m={'0 0 15px 0'}>
                        <Text>Poliza Bronce</Text>
                        <Switch
                            colorScheme='green'
                            size='lg' />
                    </Box>
                    <Accordion defaultIndex={[0]} allowMultiple >
                        <AccordionItem border={'0'}>
                            <AccordionPanel pb={4} p={'0'} fontSize={'14px'}>
                                He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                            </AccordionPanel>

                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left' fontSize={'10px'} color={'#A9AFD9'}>
                                    ver menos
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>

                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
            <Box
                p={'0'}
                display={'flex'}
                alignItems={'flex-start'}
                m={'0 0 40px 0px'}>
                <Image m={'0 10px 0 0'} src={icon1} />
                <Box >
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        m={'0 0 15px 0'}>
                        <Text>Poliza Plata</Text>
                        <Switch
                            colorScheme='green'
                            size='lg' />
                    </Box>
                    <Accordion defaultIndex={[0]} allowMultiple >
                        <AccordionItem border={'0'}>
                            <AccordionPanel pb={4} p={'0'} fontSize={'14px'}>
                                He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                            </AccordionPanel>
                            <h5>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontSize={'10px'} color={'#A9AFD9'}>
                                        ver menos
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h5>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
            <Box
                p={'0'}
                display={'flex'}
                alignItems={'flex-start'}
                m={'0 0 40px 0px'}>
                <Image m={'0 10px 0 0'} src={icon1} />
                <Box >
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        m={'0 0 15px 0'}>
                        <Text>Poliza Oro</Text>
                        <Switch
                            colorScheme='green'
                            size='lg' />
                    </Box>
                    <Accordion defaultIndex={[0]} allowMultiple >
                        <AccordionItem border={'0'}>
                            <AccordionPanel pb={4} p={'0'} fontSize={'14px'}>
                                He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                            </AccordionPanel >
                            <h5>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontSize={'10px'} color={'#A9AFD9'}>
                                        ver menos
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h5>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>

        </Container>
    )
}
