import React, { useContext, useEffect, useState } from 'react'
import { Container, Paper, Title } from '@mantine/core'
import ChatBox from './ChatBox'
import { initialFetchForMessagesInChannel, listenForMessagesInChannel } from '../../functions/channel'
import { ChannelContext } from '../../context/ChannelContext'
import ChatBubble from './ChatBubble'
import { WorkspaceContext } from '../../context/WorkspaceContext'

const Chat = () => {

const { focusedChannel } = useContext<any>(ChannelContext)
const { focusedWorkspace } = useContext<any>(WorkspaceContext)
const [chatMessages, setChatMessages] = useState<any>([])

  useEffect(() => {
 
    const unsub = listenForMessagesInChannel(focusedChannel.channel_id, (messages) => {
      setChatMessages(messages)
      
    })

    return () => {
      if (unsub && typeof unsub === 'function') {
        //@ts-ignore
        unsub();
      }
    };
    
    }, [focusedChannel.channel_id])

    useEffect(() => {
      setChatMessages([])
    }, [focusedWorkspace])

  return (
    <Container onClick={() => console.log(chatMessages)} fluid>
            {/* Here will be chat area */}
            {chatMessages.map((message: any) => (
              <ChatBubble message={message} />
            ))}
            <ChatBox />
        </Container>
  )
}

export default Chat