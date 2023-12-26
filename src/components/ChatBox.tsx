import React, { useState } from 'react'
import { Textarea, Container, Paper, Input } from '@mantine/core'
import { useForm } from '@mantine/form'

const ChatBox = () => {

const [value, setValue] = useState('')

const form = useForm({
  initialValues: {
    message: '',
  },

});



  return (
    <Container>
      <form onKeyDown={(e) => {
        if(e.key === 'Enter') {
          console.log('Enter key pressed')
        }
       
        }} onSubmit={form.onSubmit((values) => console.log(values))}>
<Textarea 
    description='Send message'
    onSubmit={() => console.log(value)}
    placeholder='Write something..'
    value={value}
    
    onChange={((e) => setValue(e.currentTarget.value))}
    />   
    </form>
   
    </Container>
  )
}

export default ChatBox