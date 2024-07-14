import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor = {"blackAlpha.900"}
    minH={"40"} p = "16" color = {"white"}>
        <Stack direction={["column","row"]}>
            <VStack alignItems={"stretch"} w={"full"} px = {"4"} >
              <Heading size = "md" textTransform={"uppercase"}
              textAlign={["center","left"]} >
                subscibe to our update
                </Heading>  
                <HStack
                borderBottom={"2px solid white"}
                py= "2" >
                    <Input  placeholder='enter email here ... ' border= {"none"} borderRadius="none"
                    outline={"none"}
                    focusBorderColor='none'/>
                    <Button
                    p={"0"}
                    color={"purplke"}
                    variant={"ghost"}
                    borderRadius={"0 20px 20px 0"}>
                        < AiOutlineSend  size= {20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w= {"full"}
            borderLeft={["none," , "1px solid white"]}
            borderRight={["none," , "1px solid white"]}>
                <Heading textAlign={"center"}>
                    video hub  </Heading>
             <Text>
                all rights recieved
             </Text>
            </VStack >
          
            
           
            <VStack w= {"full"}>
           
  <Heading size= {"md "} textTransform={"uppercase"}>
    social media
  </Heading>
  <Button variant={"link"} colorScheme={"white"} >
     <a href='https://youtube.com' target ={"black"}>youtube</a>
  </Button>
  <Button variant={"link"} colorScheme={"white"} >
     <a href='https://instagram.com/muzamil_nabii' target ={"black"}>Instagram</a>
  </Button>
  <Button variant={"link"} colorScheme={"whiteA"}>
     <a href="https://github.com/muzamil1233" target ={"black"}>Github</a>
  </Button>
            </VStack >

        </Stack>


    </Box>
  )
}

export default Footer
