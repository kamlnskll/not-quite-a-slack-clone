import { Paper, Title, Text } from '@mantine/core'
import React, { useContext } from 'react'
import { ChannelContext } from '../../context/ChannelContext'

type Props = {
    channel: any
}

const ChannelListItem = ({channel}: Props) => {
  // @ts-ignore
const { focusedChannel, setFocusedChannel } = useContext(ChannelContext)

  return (
    <Paper withBorder={true} onClick={() => {setFocusedChannel(channel)}}>
    <Text pl='md' onClick={() => console.log(focusedChannel)}>{channel.channelName}</Text>
    </Paper>
  )
}

export default ChannelListItem