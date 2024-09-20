import { Flex, Typography } from 'antd'
import { MdOutlineTune } from "react-icons/md";
import Search from 'antd/es/transfer/search'
import React from 'react'


function Banner() {
  return (
      <Flex align='center' justify='space-between'>
        <Typography.Title level={3}>Recently visits</Typography.Title>
        <Flex align='center' gap='10px'>
            <MdOutlineTune  className='banner-icon'/>
            <Search placeholder='Search by event name'/>
        </Flex>
      </Flex>
  )
}

export default Banner
