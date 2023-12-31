import { Avatar, Text, Container, Group, Paper, Stack, Title,  Button,  } from '@mantine/core'
import { IconCopy, IconCheck,  } from '@tabler/icons-react'
import React from 'react'
import { auth } from '../../firebase'
import { useClipboard } from '@mantine/hooks';
import ContactsCard from '../contacts/ContactsCard';


const Profile = () => {
  const clipboard = useClipboard({timeout: 700})

  return (
    <Container>
      <Paper withBorder={true} h={'200px'}>
      <Group ml='lg' my='50px'>
        <Avatar size='xl'></Avatar>
        <Stack>
        <Title onClick={() => console.log(auth.currentUser)}>Your name</Title>
        <Group>
          <Text>Your ID:</Text>
          <Text>{auth.currentUser?.uid}</Text>
          <Button
          size='compact-md'
          leftSection={clipboard.copied ? <IconCheck size={20}/> : <IconCopy size={20} />}
          color={clipboard.copied ? 'indigo' : 'blue'}
          onClick={() => clipboard.copy(auth.currentUser?.uid)}
          >{clipboard.copied ? 'Copied' : 'Copy'}</Button>
          <Button size='compact-md'>
            Edit
          </Button>
        </Group>
        </Stack>
        </Group>
      </Paper>
<ContactsCard />
    </Container>
  )
}

export default Profile