import React, {useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { Flex, Paper, Text } from '@mantine/core'
import { fetchProfileData } from '../../functions/profile'

type Props = {
message: any,
// isOwnMessage: boolean

}

const ChatBubble = ({message}: Props) => {

const [senderData, setSenderData] = useState<any>({})

  useEffect(() => {
fetchProfileData(message.sender_id).then((res: any) => 
setSenderData(res)
)
    
  }, [])

  return (
   
  <>
    { message.sender_id === auth?.currentUser?.uid ? (
      <Flex justify={'right'}>
      <Text>{senderData.firstName}</Text>
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