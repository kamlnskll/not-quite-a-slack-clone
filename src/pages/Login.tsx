import React from 'react'
import { AppShell, Text, Container, Button, TextInput, PasswordInput, Title, Paper, Group, Anchor, Checkbox } from '@mantine/core';
import {useForm} from '@mantine/form'


const Login = () => {
  return (
    <AppShell>
    <AppShell.Main>
      <Container size={640} my={120}>
      <Title ta="center">
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Don't have an account?{' '}
        <Anchor size="sm" component="button">
          Sign up here
        </Anchor>
        </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="Your email" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
      </Container>
    </AppShell.Main>
    </AppShell>
  )
}

export default Login