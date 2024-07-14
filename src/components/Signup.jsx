import { Avatar, Button, Container, Heading, Input,  Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
  return (
   <Container maxW={"container.xl"} h ={"100vh"} p ={"16"}>
   <form >
    <VStack alignItems={"stretch"}
    spacing={"8"}
    w={["full","96"]}
     m = {"auto"} 
     my ={"16"}>
        <Heading>
            VIDEO HUB

        </Heading>
        <Avatar alignSelf={"center"} boxSize={"32"} />
        <Input placeholder={'Name'} type ={"Name"} required focusBorderColor={"purple.600"}/>
        <Input placeholder={'Email'} type ={"email"} required focusBorderColor={"purple.600"}/>
        <Input placeholder={'password'} type ={"password"} required focusBorderColor={"purple.600"}/>
  
   <Button colorScheme={"purple"} type ={"submit"}>sign up</Button>
   <Text textAlign={"right"}>Already signed up  ? {""}
   <Button variant={"link"}
   colorScheme ={"purple"} >
      <Link to = {"/login"}>LogIN Now</Link>
   </Button>
   </Text>
   
    </VStack>
   </form>
   </Container>
  )
}

export default Signup;
