import { Progress, Box, Text, Image, Container, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import CopAuto from './components/CopAuto'
import CopFamily from './components/CopFamily'
import PlusPlan from './components/PlusPlan'

export default function Coverture({register, errors}) {
    return (
        <Container p={'0'}>
            <Box
                display={'flex'}
                justifyContent={'space-around'}>
                <Tabs 
                    w={'100%'}
                    p={'0'}>
                    <TabList 
                        display={'flex'}
                        justifyContent={'space-around'}
                        alignItems={'center'}>
                        <Tab textTransform={'uppercase'} h={'60px'} fontSize={'10px'} p={'0'}>Protege a <br />tu auto</Tab>
                        <Tab textTransform={'uppercase'} h={'60px'} fontSize={'10px'} p={'0'}>Protege a los <br />que te rodean</Tab>
                        <Tab textTransform={'uppercase'} h={'60px'} fontSize={'10px'} p={'0'}>mejora tu <br />plan</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <CopAuto/>
                        </TabPanel>
                        <TabPanel>
                            <CopFamily/>
                        </TabPanel>
                        <TabPanel>
                            <PlusPlan/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>
        </Container>
    )
}
