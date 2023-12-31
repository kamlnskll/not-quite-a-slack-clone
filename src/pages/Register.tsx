import React from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../functions/auth';
import { AppShell, Text, Container, Button, TextInput, PasswordInput, Title, Paper, Group, Anchor, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';


const Register = () => {

  const navigate = useNavigate()

  
  const form = useForm({
    initialValues: {
      email: '',
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <AppShell>
    <AppShell.Main><Container size={640} my={120}>
      <Title ta="center">
        Create a new account
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Anchor size="sm" component="button" onClick={() => {
          navigate('/login')
        }}>
        Login here  
        </Anchor>
        </Text>
        <form onSubmit={form.onSubmit((values) => {
          registerUser(values.email, values.password, values.firstName, values.lastName, values.userName).then((res: any) => {
            console.log(res)
          })
          console.log(values)})}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="Your email" {...form.getInputProps('email')} required />
        <Group grow mt='md' >
        <TextInput label="First Name" placeholder="Your first name" {...form.getInputProps('firstName')} required />
        <TextInput label="Last Name" placeholder="Your last name" {...form.getInputProps('lastName')} required />
        </Group>
        <TextInput mt='md' label="Username" placeholder="Choose a username" {...form.getInputProps('userName')} required />
        <PasswordInput label="Password" placeholder="Your password" {...form.getInputProps('password')} required mt="md" />
        <PasswordInput label="Confirm Password" placeholder="Confirm password" {...form.getInputProps('confirmPassword')} required mt="md" />
        <Button type='submit' fullWidth mt="xl">
          Create account
        </Button>
      </Paper>
      </form>
      </Container></AppShell.Main>
    </AppShell>
  )
}

export default Register