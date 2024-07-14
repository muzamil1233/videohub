import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel}  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3 (1).jpg"
import img4 from "../Assets/4 (1).jpg"
import img5 from "../Assets/5.png"

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top :"50%",
    transform:"translate(-50%, -50%)",
    textTransform :"uppercase",
    p:"4",
    size:"4xl",
};

const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container   maxW ={"container.xl"} minW = {"100vh"} 
         p = "16">
            <Heading textTransform={"uppercase"}
            py="2"
            w={"fit-content"} 
            borderBottom={"2px solid"}
            m= "auto">
                services
            </Heading>
            <Stack
            h ="full"
            p={"4"}
            alignItems={"center"}
            direction={["column","row"]}>
          <Image src ={ img5}   h = {["40","400"]}filter = {"hue-rotate(-130deg)"}/>
          <Text letterSpacing={"widest"}
          lineHeight={"190%"}
          p={["4","16"]}
          textAlign={"center"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et provident exercitationem eos. Nemo fuga libero tenetur labore quisquam, aliquam eum quis voluptas in inventore ratione nesciunt reiciendis, tempore autem error.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, corrupti voluptatibus, vero ut earum suscipit natus dolor repellendus enim, deleniti similique accusantium impedit. Nulla consectetur vitae nesciunt at officiis ea.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus pariatur officia expedita inventore libero, odio nam similique obcaecati quos at minima voluptatem enim voluptates aut, quo veniam dolore velit! Corrupti.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio laboriosam consectetur dignissimos quia. Atque obcaecati modi, earum itaque accusamus possimus minus ab architecto quasi aperiam perspiciatis. Suscipit, voluptates veritatis!
          </Text>
            </Stack>

             
        </Container>


    </Box>
  )
};
const MyCarousel = ()=>(
    <Carousel autoPlay  infiniteLoop interval={1000} showStatus= {false}
    showThumbs = {false}
    showArrows= {false}>
        <Box w= "full " h={"100vh"} >
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600 "} color = {"white"}
             {...headingOptions}>
              watch the future
            </Heading>

        </Box>

        <Box w= "full " h={"100vh"} >
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.900 "} color = {"black"} {...headingOptions}>
              future in gaming 
            </Heading>

        </Box>

        <Box w= "full " h={"100vh"} >
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600 "} color = {"black"}
             {...headingOptions} >
             gaming on console
            </Heading>

        </Box>

        <Box w= "full " h={"100vh"} >
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600 "} color = {"black"} {...headingOptions}>
              night life is cool 
            </Heading>

        </Box>

        


    </Carousel>
)

export default Home
