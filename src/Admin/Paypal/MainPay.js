import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import Paypal from './Paypal'

const MainPay= () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
        <AdminSidebar/>
        <Paypal />
    </Flex>
  )
}

export default MainPay