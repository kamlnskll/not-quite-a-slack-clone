import { Avatar, Text, Container, Group, Paper, Stack, Title,  Button,  } from '@mantine/core'
import { IconCopy, IconCheck,  } from '@tabler/icons-react'
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { useClipboard } from '@mantine/hooks';
import ContactsCard from '../contacts/ContactsCard';
import { fetchProfileData } from '../../functions/profile';
import { ProfileContext } from '../../context/ProfileContext';


const Profile = () => {

  const { profileData, setProfileData }  = useContext<any>(ProfileContext)

  const clipboard = useClipboard({timeout: 700})

  return (
    <Container>
      <Paper withBorder={true} h={'200px'}>
      <Group ml='lg' my='20px'>
        <Avatar size='xl' src={profileData.profilePic}></Avatar>
        <Stack>
        <Title onClick={() => console.log(profileData)}>{profileData.firstName} {profileData.lastName}</Title>
        <Title ml={'md'} c={'dark'} order={5} >{profileData.userName}</Title>
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