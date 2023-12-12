import React, {useState, useEffect} from 'react'
import { AppShell, Burger, Group, Skeleton, Container, Stack, Button, Text, Title } from '@mantine/core';
import { logOut } from '../functions/auth';
import { getUserWorkspaces } from '../functions/workspace'
import NewWorkspace from '../components/NewWorkspace';
import WorkspaceCard from '../components/WorkspaceCard';


const Home = () => {

const [mobileOpened, setMobileOpened] = useState(false);
const [desktopOpened, setDesktopOpened] = useState(false);
const [userWorkspaces, setUserWorkspaces] = useState([])

useEffect(() => {
  getUserWorkspaces().then((res) => {
    setUserWorkspaces(res)
    console.log(res)})
}, [])

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
                <NewWorkspace />
                <Title size='sm'>Workspaces</Title>
                {userWorkspaces.map((workspace) => (
                  <WorkspaceCard workspace={workspace} />
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