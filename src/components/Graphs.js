import { Card, Flex, Typography } from 'antd'
import React from 'react'
import { BarCharts, Chart, PieChart } from '../Data/Chart'

function Graphs() {
  return (
    <Flex vertical>
        <Typography.Title level={3} style={{paddingTop: '20px'}}>Current event analytics</Typography.Title>
        <Card style={{width: '100%'}}>
            <Chart/>
        </Card>
        <Flex style={{paddingTop: '5px'}}>
            <Card style={{width: '60%', }}>
                <BarCharts/>
            </Card>
            <Card style={{width: '40%'}}>
                <PieChart/>
            </Card>
        </Flex>
    </Flex>
  )
}

export default Graphs
