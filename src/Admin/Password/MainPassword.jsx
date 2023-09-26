import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import Password from './Password'

const MainPassword = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <AdminSidebar/>
    <Password />
</Flex>
  )
}

export default MainPassword