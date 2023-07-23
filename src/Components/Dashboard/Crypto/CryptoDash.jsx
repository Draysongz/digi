import React from 'react'
import { SideBarFunc } from '../SideBarFunc'
import MainCrypto from './MainCrypto'

import {Flex} from "@chakra-ui/react"

const CryptoDash = () => {
  return (
    <>
      <Flex flexDir={["column", "column", "row"]}>
        <SideBarFunc />
        <MainCrypto />
      </Flex>
    </>
  )
}

export default CryptoDash