import { Button, Container, Heading, Input,  Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
   <Container maxW={"container.xl"} h ={"100vh"} p ={"16"}>
   <form >
    <VStack alignItems={"stretch"}
    spacing={"8"}
    w={["full","96"]}
     m = {"auto"} 
     my ={"16"}>
        <Heading>
            welcome back

        </Heading>
        <Input placeholder={'Email'} type ={"email"} required focusBorderColor={"purple.600"}/>
        <Input placeholder={'password'} type ={"password"} required focusBorderColor={"purple.600"}/>
   <Button variant={"link"} alignSelf={"flex-end"}>
      <Link to = {"/forgetPassword"}>Forget Password?</Link>
   </Button>
   <Button colorScheme={"purple"} type ={"submit"}>Log In</Button>
   <Text textAlign={"right"}>new user ? {""}
   <Button variant={"link"}
   colorScheme ={"purple"} >
      <Link to = {"/Signup"}>sign up</Link>
   </Button>
   </Text>
   
    </VStack>
   </form>
   </Container>
  )
}

export default Login
