import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import EventContent from './EventContent'
import Graphs from './Graphs'

function MainContent() {
  return (
    <div style={{flex: 1}}>
      <Flex vertical gap='2rem'>
        <Banner/>
        <Flex gap='2.5rem'>
            <EventContent Eventname= 'Event'/>
            <EventContent Eventname= 'Class'/>
        </Flex>
        <hr />
        <Graphs/>
      </Flex>
    </div>
  )
}

export default MainContent
