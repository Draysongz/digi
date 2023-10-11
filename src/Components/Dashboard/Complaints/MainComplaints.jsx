import React from 'react'
import { Flex } from '@chakra-ui/react'
import { SideBarFunc } from '../SideBarFunc'
import Complaints from './Complaints'

const MainComplaints = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <SideBarFunc/>
    <Complaints />
</Flex>
  )
}

export default MainComplaints