import React from 'react'
import { Flex } from '@chakra-ui/react'
import Chat from './Chat'
import AdminSidebar from '../../AdminSidebar'

const MainChat = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <AdminSidebar/>
    <Chat />
</Flex>
  )
}

export default MainChat