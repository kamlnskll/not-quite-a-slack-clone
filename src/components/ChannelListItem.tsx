import { Paper, Title } from '@mantine/core'
import React, { useContext } from 'react'
import { ChannelContext } from '../context/ChannelContext'

type Props = {
    channel: any
}

const ChannelListItem = ({channel}: Props) => {
  // @ts-ignore
const { focusedChannel, setFocusedChannel } = useContext(ChannelContext)

  return (
    <Paper withBorder={true} onClick={() => {setFocusedChannel(channel)}}>
    <Title size='xs' onClick={() => console.log(focusedChannel)}>{channel.channelName}</Title>
    </Paper>
  )
}

export default ChannelListItem