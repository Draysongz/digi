import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import Settings from './Settings'

const MainSettings = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <AdminSidebar/>
    <Settings />
</Flex>
  )
}

export default MainSettings