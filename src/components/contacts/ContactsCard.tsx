import { Button, Container, Group, Paper, Text, Title } from '@mantine/core'
import { IconUserPlus } from '@tabler/icons-react'
import React, { useEffect } from 'react'

const ContactsCard = () => {

    useEffect(() => {
        // Use effect to run the fetch contacts function for the user
        //


    }, [])


  return (
    <Paper withBorder={true} h={'200px'} my='xl' w='50%'>
    <Group mt='sm' justify='center'>
      <Title order={3} >Contacts</Title>
      <Button size='compact-xs' ml='sm' leftSection={<IconUserPlus size='16' />}>
      <Text size='10'>Add</Text>
    </Button>
    </Group>
   
 
   
    </Paper>
  )
}

export default ContactsCard