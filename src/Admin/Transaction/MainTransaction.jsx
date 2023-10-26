import React from 'react'
import Transaction from './Transaction'
import AdminSidebar from '../AdminSidebar'
import { Flex } from '@chakra-ui/react'

const MainTransaction = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <AdminSidebar/>
    <Transaction />
</Flex>
  )
}

export default MainTransaction