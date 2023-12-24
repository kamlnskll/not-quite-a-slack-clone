import { Paper, Title } from '@mantine/core'
import React from 'react'


type Props = {
    channel: any
}

const ChannelListItem = ({channel}: Props) => {
  return (
    <Paper withBorder={true} w='md'>
    <Title size='xs'>{channel.channelName}</Title>
    </Paper>
  )
}

export default ChannelListItem