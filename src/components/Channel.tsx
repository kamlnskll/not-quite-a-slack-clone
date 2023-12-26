import React, { useEffect, useState, useContext } from 'react'
import { Container, Paper, Title } from '@mantine/core'
import Chat from './Chat'
import { listenForMessagesInChannel } from '../functions/channel'
import { ChannelContext } from '../context/ChannelContext'


type Props = {
channel: any

}

const Channel = ({channel}: Props) => {

const [channelMessages, setChannelMessages] = useState([])
//@ts-ignore
const { focusedChannel } = useContext(ChannelContext)

const channelDataHandler = async () => {
// const listenForMessagesInChannel = (channel.channel_id, (messages: any) => {
// console.log(messages)
// })
// // .then((res: Response) => console.log('Messages in channel fetched', res)).catch((err: Error) => console.log(err))


}

useEffect(() => {
  channelDataHandler()
}, [focusedChannel])


  return (
    <Container>
    <Chat />    
    </Container>
  )
}

export default Channel