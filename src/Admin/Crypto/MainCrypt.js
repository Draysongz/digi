import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import Crypto from './Crypto'

const MainCrypt = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
        <AdminSidebar/>
        <Crypto />
    </Flex>
  )
}

export default MainCrypt