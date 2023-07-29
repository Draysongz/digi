import React, {useState} from 'react'
import logo from './assets/logoWhite.png'
import authBg from './assets/authBg.png'
import {Link} from 'react-router-dom'
import excitedMan from './assets/excitedMan.png'

import {
  Flex,
  Box,
  Text,
  Button,
  Heading,
  Image,
  Container
} from '@chakra-ui/react'




const Options = () => {
  const [isLoading, setIsLoading] =useState(false)
  return (
    <Flex
    maxWidth="4xl"
    p="20px"
    minHeight="100vh"
    minWidth={['70vw', '98vw', "98.7vw", "98.7vw"]}
    bgImage={authBg}
    bgSize={'cover'}
    border={'2px solid red'}
    bgRepeat={'no-repeat'}
    direction={'column'}
  >
      <Box>
      <Image src={logo} alt='digimart' width={['40%', '40%', '20%']} />
      </Box>
      
      <Flex direction={'column'} justifyContent={'center'} border={'2px solid green'} alignItems={'center'} width={['90vw', '90vw','95vw', '96vw']} pos={'relative'} top={-7} overflow={'hidden'} minH={'84vh'}>
        <Box ml={['6rem', '10rem', '12rem']} mt={'1rem'} >
        <Image src={excitedMan} alt='excited man' width={['70%', '60%','70%', '55%']}/>
        </Box>
        <Flex direction={'column'} gap={4} justifyContent={'center'} alignItems={'center'} zIndex={1} pos={'absolute'} mt={['20em', '20em', '23em', '20em']}>
          <Heading color={'white'} fontSize={['24px', '30px', '40px']} fontStyle={'normal'} fontFamily={'Lato sans-serif'} textAlign={'center'}>
          Welcome to a world<br/>of infinite trading
          </Heading>

          <Link to='/register'><Button borderRadius={'20px'} w={['70vw', '75vw', '60vw', '28vw']} minH={'7vh'} bg={'white'} color={'#1808A3'} _hover={{'bgColor': 'transparent', 'color' : 'white', border: '1px solid white'}}>Create an account</Button></Link>

          <Link to='/login'><Button borderRadius={'20px'} variant={'outline'}  w={['70vw', '75vw', '60vw', '28vw']} minH={'7vh'} color={'White'} _hover={{'bgColor': 'white', 'color' : '#1808A3', border: '1px solid white'}}>Login</Button></Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Options