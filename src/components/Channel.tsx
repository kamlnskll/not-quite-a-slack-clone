import React, { useEffect, useState, useContext } from 'react'
import { Container, Paper, Title } from '@mantine/core'
import Chat from './Chat'
import { fetchMessagesInChannel } from '../functions/channel'
import { ChannelContext } from '../context/ChannelContext'


type Props = {
channel: any

}

const Channel = ({channel}: Props) => {

const [channelMessages, setChannelMessages] = useState([])
//@ts-ignore
const { focusedChannel } = useContext(ChannelContext)

const channelDataHandler = async () => {
fetchMessagesInChannel(channel.channel_id).then((res) => console.log('Messages in channel fetched', res)).catch((err) => console.log(err))


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