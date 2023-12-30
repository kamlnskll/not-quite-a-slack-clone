import React, {useEffect} from 'react'
import { auth } from '../../firebase'
import { Flex, Paper, Text } from '@mantine/core'

type Props = {
message: any,
// isOwnMessage: boolean

}

const ChatBubble = ({message}: Props) => {

  useEffect(() => {

    
  }, [])

  return (
   
  <>
    { message.sender_id === auth?.currentUser?.uid ? (
      <Flex justify={'right'}>
      <Paper  bg={'lightblue'} withBorder={true} my='xs' w='30%' py='4px'>
        <Text color='dark' ml='sm'>{message.messageBody}</Text>
      </Paper>
      </Flex>
    ) : (
      <Flex justify={'left'}>
      <Paper  bg={'green'} withBorder={true} my='xs' w='30%' py='4px'>
        <Text color='dark' ml='sm'>{message.messageBody}</Text>
      </Paper>
      </Flex>
    )}
  </>
  
  )
}

export default ChatBubble