import React from 'react'
import { auth } from '../firebase'
import { Paper } from '@mantine/core'

type Props = {
message: any,
// isOwnMessage: boolean

}

const ChatBubble = ({message}: Props) => {


  return (
   
  <div>
    { message.sender_id === auth?.currentUser?.uid ? (
      <Paper withBorder={true}>
        {message.messageBody}
      </Paper>
    ) : (
      <Paper>NO NOT MY MESSAGE</Paper>
    )}
  </div>
  
  )
}

export default ChatBubble