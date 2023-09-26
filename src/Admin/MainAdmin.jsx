import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from './AdminSidebar'
import Admin from './Admin'

const MainAdmin = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
        <AdminSidebar/>
        <Admin />
    </Flex>
  )
}

export default MainAdmin