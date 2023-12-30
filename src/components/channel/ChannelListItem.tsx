import { Paper, Title, Text, UnstyledButton } from '@mantine/core'
import React, { useContext } from 'react'
import { ChannelContext } from '../../context/ChannelContext'

type Props = {
    channel: any
}

const ChannelListItem = ({channel}: Props) => {
  // @ts-ignore
const { focusedChannel, setFocusedChannel } = useContext(ChannelContext)

  return (
    <UnstyledButton style={{borderStyle: 'solid', borderWidth: '1px', borderRadius: '5px' }} onClick={() => {setFocusedChannel(channel)}}>
    <Text mx='md' size='sm' fw={500}>{channel.channelName}</Text>
    </UnstyledButton>
  )
}

export default ChannelListItem