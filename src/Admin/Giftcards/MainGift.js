import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import Giftcards from './Giftcards'

const MainGift= () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
        <AdminSidebar/>
        <Giftcards />
    </Flex>
  )
}

export default MainGift