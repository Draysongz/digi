import React from 'react'
import { SideBarFunc } from '../SideBarFunc'
import Gift from './Gift'
import { Flex } from '@chakra-ui/react'

const MainGift = () => {
  return (
    <>
    <Flex flexDir={["column", "column", "row"]}>
      <SideBarFunc />
      <Gift />
    </Flex>
  </>
  )
}

export default MainGift