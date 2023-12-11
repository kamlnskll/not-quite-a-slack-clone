import React, {useState} from 'react'
import { AppShell, Burger, Group, Skeleton, Container, Stack, Button, Text, Title } from '@mantine/core';
import { logOut } from '../functions/auth';
import NewWorkspace from '../components/NewWorkspace';


const Home = () => {

const [mobileOpened, setMobileOpened] = useState(false);
const [desktopOpened, setDesktopOpened] = useState(false);

        return (
            <AppShell
            
              navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
              }}
              padding="md"
            >
          
              <AppShell.Navbar p="md">
                Navbar
                <NewWorkspace />
                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                  ))}
                  <Stack justify="flex-end" h={400}>
                    <Button color='yellow' type='button' w={100} onClick={() => logOut()}>Log Out</Button>
                  </Stack>
              </AppShell.Navbar>
              <AppShell.Main>
                <Container>
                  <Group justify='flex-end'>
                  <Burger opened={desktopOpened} onClick={() => setDesktopOpened(!desktopOpened)}/>
                  </Group>
                  <Title>Your Profile</Title>
                  </Container></AppShell.Main>
            </AppShell>
          );
      
}

export default Home