import React from 'react'
import { AppShell, Text, Container, Button, TextInput, PasswordInput, Title, Paper, Group, Anchor, Checkbox } from '@mantine/core';
import {useForm} from '@mantine/form'
import { loginUser } from '../functions/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });


  return (
    <AppShell>
    <AppShell.Main>
      <Container size={640} my={120}>
      <Title ta="center">
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Don't have an account?{' '}
        <Anchor onClick={() => {
          navigate('/register')
        }}size="sm" component="button">
          Sign up here
        </Anchor>
        </Text>
        <form onSubmit={form.onSubmit((values) => {
          loginUser(values.email, values.password)
          console.log(values)
        
        })}
          
          >
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="Your email" {...form.getInputProps('email')} required />
        <PasswordInput label="Password" placeholder="Your password" {...form.getInputProps('password')} required mt="md" />
        <Button fullWidth type='submit' mt="xl">
          Sign in
        </Button>
      </Paper>
      </form>
      </Container>
    </AppShell.Main>
    </AppShell>
  )
}

export default Login