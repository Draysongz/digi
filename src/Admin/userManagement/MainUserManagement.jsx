import React from 'react'
import { Flex } from '@chakra-ui/react'
import AdminSidebar from '../AdminSidebar'
import UserManagement from './UserManagement'

const MainUserManagement = () => {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
    <AdminSidebar/>
    <UserManagement />
</Flex>
  )
}

export default MainUserManagement