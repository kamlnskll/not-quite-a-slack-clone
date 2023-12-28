import { Avatar, Container, Paper } from '@mantine/core'
import React from 'react'

const Profile = () => {
  return (
    <Container>
      <Paper withBorder={true} h={'200px'}>
      <Container ml='lg' my='50px'>
        <Avatar size='xl'></Avatar>
      </Container>
      </Paper>


    </Container>
  )
}

export default Profile