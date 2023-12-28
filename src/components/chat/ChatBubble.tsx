import React from 'react'
import { auth } from '../../firebase'
import { Flex, Paper, Text } from '@mantine/core'

type Props = {
message: any,
// isOwnMessage: boolean

}

const ChatBubble = ({message}: Props) => {


  return (
   
  <>
    { message.sender_id === auth?.currentUser?.uid ? (
      <Flex justify={'right'}>
      <Paper withBorder={true} my='xs' w='30%' py='4px'>
        <Text ml='sm'>{message.messageBody}</Text>
      </Paper>
      </Flex>
    ) : (
      <Paper withBorder={true}>NO NOT MY MESSAGE</Paper>
    )}
  </>
  
  )
}

export default ChatBubble