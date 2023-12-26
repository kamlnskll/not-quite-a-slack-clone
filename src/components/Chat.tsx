import React, { useContext, useEffect } from 'react'
import { Container, Paper, Title } from '@mantine/core'
import ChatBox from './ChatBox'
import { listenForMessagesInChannel } from '../functions/channel'
import { ChannelContext } from '../context/ChannelContext'

const Chat = () => {

const { focusedChannel } = useContext<any>(ChannelContext)

  useEffect(() => {
    const unsub = listenForMessagesInChannel(focusedChannel.channel_id, (messages) => {
      console.log('Received message from listner', messages)
    })

    return () => {
      if (unsub && typeof unsub === 'function') {
        //@ts-ignore
        unsub();
      }
    };
    
    }, [focusedChannel.channel_id])

  return (
    <Container>
       
            Here will be chat area
            
            <ChatBox />
        </Container>
  )
}

export default Chat