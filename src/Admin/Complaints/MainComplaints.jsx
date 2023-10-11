import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import Complaints from './Complaints'

const MainComplaints = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <AdminSidebar/>
    <Complaints />
</Flex>
  )
}

export default MainComplaints