import React, { useState } from 'react'
import { Textarea, Container, Paper, Input, Group, ActionIcon, Grid } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconMessage2Plus } from '@tabler/icons-react'

const ChatBox = () => {

const [value, setValue] = useState('')

const form = useForm({
  initialValues: {
    message: '',
  },

});



  return (
    <Container>
  <form onSubmit={form.onSubmit((values) => {
    console.log(values.message)
    form.reset()
    })}>
<Grid>
  <Grid.Col span={4}><Textarea 
    description='Send message'
    placeholder='Write something..'
    {...form.getInputProps('message')}
    /></Grid.Col>
<Grid.Col span={1}>
<ActionIcon type='submit'>
    <IconMessage2Plus size='xs' />  
    </ActionIcon>  
</Grid.Col>
   
  </Grid>
  </form>
   
    </Container>
  )
  
}

export default ChatBox