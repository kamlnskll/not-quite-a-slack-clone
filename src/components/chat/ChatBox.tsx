import React, { useContext, useState, useEffect } from 'react'
import { Textarea, Container, Paper, Input, Group, ActionIcon, Grid } from '@mantine/core'
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
    <Container>
  <form onSubmit={form.onSubmit((values) => {
    newChannelMessage(focusedChannel.channel_id, values.message).then((res) => console.log(res)).catch((err) => console.log(err))
    form.reset()
    })}>
<Grid>
  <Grid.Col span={4}><Textarea 
    description='Send message'
    placeholder='Write something..'
    {...form.getInputProps('message')}
    /></Grid.Col>
<Grid.Col span={1}>
<ActionIcon type='submit' size='sm'>
    <IconMessage2Plus/>  
    </ActionIcon>  
</Grid.Col>
   
  </Grid>
  </form>
   
    </Container>
  )
  
}

export default ChatBox