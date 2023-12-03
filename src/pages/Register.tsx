import React from 'react'
import { Navigate } from 'react-router-dom';
import { AppShell, Text, Container, Button, TextInput, PasswordInput, Title, Paper, Group, Anchor, Checkbox } from '@mantine/core';

const Register = () => {
  return (
    <AppShell>
    <AppShell.Main><Container size={640} my={120}>
      <Title ta="center">
        Create a new account
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button">
        Login here  
        </Anchor>
        </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="Your email" required />
        <Group grow mt='md' >
        <TextInput label="First Name" placeholder="Your first name" required />
        <TextInput label="Last Name" placeholder="Your last name" required />
        </Group>
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <PasswordInput label="Confirm Password" placeholder="Confirm password" required mt="md" />
        <Button fullWidth mt="xl">
          Create account
        </Button>
      </Paper>
      </Container></AppShell.Main>
    </AppShell>
  )
}

export default Register