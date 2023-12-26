import React from 'react'
import { Textarea, Container, Paper } from '@mantine/core'

const ChatBox = () => {
  return (
    <Container>
    <Textarea 
    description='Send message'
    placeholder='Write something..'
    />
    </Container>
  )
}

export default ChatBox