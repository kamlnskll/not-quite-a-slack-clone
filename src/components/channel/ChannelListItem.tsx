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
    <Paper bg={'lightgray'} withBorder={true} onClick={() => {setFocusedChannel(channel)}}>
    <Text mx='md' size='sm' fw={500}>{channel.channelName}</Text>
    </Paper>
  )
}

export default ChannelListItem