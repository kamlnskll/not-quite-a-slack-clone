import React, { useContext, useEffect, useState } from 'react'
import { Container, Paper, Title } from '@mantine/core'
import ChatBox from './ChatBox'
import { listenForMessagesInChannel } from '../functions/channel'
import { ChannelContext } from '../context/ChannelContext'
import ChatBubble from './ChatBubble'

const Chat = () => {

const { focusedChannel } = useContext<any>(ChannelContext)
const [chatMessages, setChatMessages] = useState<any>([])

  useEffect(() => {
    const unsub = listenForMessagesInChannel(focusedChannel.channel_id, (messages) => {
      setChatMessages(messages)
      console.log('Received message from listener - chatMessages', chatMessages)
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
            {chatMessages.map((message: any) => {
              <ChatBubble message={message} />
            })}
            <ChatBox />
        </Container>
  )
}

export default Chat