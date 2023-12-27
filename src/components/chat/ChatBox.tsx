import React, { useContext, useState, useEffect } from 'react'
import { Textarea, Container, Paper, Input, Group, ActionIcon, Grid, Button, Text, Title, Space } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconMessage2Plus } from '@tabler/icons-react'
import { newChannelMessage } from '../../functions/channel'
import { ChannelContext } from '../../context/ChannelContext'

const ChatBox = () => {

const [value, setValue] = useState('')
const { focusedChannel } = useContext<any>(ChannelContext)

const form = useForm({
  initialValues: {
    message: '',
  },

});



  return (
  <form onSubmit={form.onSubmit((values) => {
    newChannelMessage(focusedChannel.channel_id, values.message).then((res) => console.log(res)).catch((err) => console.log(err))
    form.reset()
    })}>
<Textarea 
    description='Send message'
    placeholder='Write something..'
    {...form.getInputProps('message')}
    />

<Button type='submit' size='compact-sm' my='md'>
    <IconMessage2Plus size={'60%'}/>
    <Title size='xs' ml='xs'>Send</Title>  
    </Button>  
  </form>
   
  )
  
}

export default ChatBox