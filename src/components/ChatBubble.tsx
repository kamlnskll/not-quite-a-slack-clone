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
      <Paper>
        {message.messageBody}
      </Paper>
    ) : (
      <div>NO NOT MY MESSAGE</div>
    )}
  </div>
  
  )
}

export default ChatBubble