import React from 'react'
import { Flex } from '@chakra-ui/react'
import Chat from './Chat'
import { SideBarFunc } from '../SideBarFunc'

const MainChat = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <SideBarFunc/>
    <Chat />
</Flex>
  )
}

export default MainChat