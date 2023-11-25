import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import Theme from './Theme'

const Main= () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
        <AdminSidebar/>
        <Theme />
    </Flex>
  )
}

export default Main