import React, { useEffect, useState, useContext } from 'react'
import { Container, Paper, Title } from '@mantine/core'
import Chat from '../chat/Chat'
import { listenForMessagesInChannel } from '../../functions/channel'
import { ChannelContext } from '../../context/ChannelContext'


type Props = {
channel: any

}

const Channel = ({channel}: Props) => {

const [channelMessages, setChannelMessages] = useState([])


  return (
    <Container>
    <Chat />    
    </Container>
  )
}

export default Channel