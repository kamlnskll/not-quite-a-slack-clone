import React, { useContext, useEffect, useState } from 'react'
import { Container, Paper, Title } from '@mantine/core'
import ChatBox from './ChatBox'
import { initialFetchForMessagesInChannel, listenForMessagesInChannel } from '../functions/channel'
import { ChannelContext } from '../context/ChannelContext'
import ChatBubble from './ChatBubble'

const Chat = () => {

const { focusedChannel } = useContext<any>(ChannelContext)
const [chatMessages, setChatMessages] = useState<any>([])

  useEffect(() => {
    // initialFetchForMessagesInChannel(focusedChannel.channel_id).then((res: any) => {
    //   setChatMessages(res)
    // })
    const unsub = listenForMessagesInChannel(focusedChannel.channel_id, (messages) => {
      setChatMessages(messages)
      
    })
    // .then(() => console.log(chatMessages))

    return () => {
      if (unsub && typeof unsub === 'function') {
        //@ts-ignore
        unsub();
      }
    };
    
    }, [focusedChannel.channel_id])

  return (
    <Container onClick={() => console.log(chatMessages)}>
            <Container fluid>
            {/* Here will be chat area */}
            {chatMessages.map((message: any) => (
              <ChatBubble message={message} />
            ))}
            </Container>
            <ChatBox />
        </Container>
  )
}

export default Chat