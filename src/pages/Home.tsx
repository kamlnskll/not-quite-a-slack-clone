import React, {useState, useEffect, useContext} from 'react'
import { AppShell, Burger, Group, Skeleton, Container, Stack, Button, Text, Title, Paper } from '@mantine/core';
import { logOut } from '../functions/auth';
import { getUserWorkspaces } from '../functions/workspace'
import NewWorkspace from '../components/workspace/NewWorkspace';
import WorkspaceCard from '../components/workspace/WorkspaceCard';
import { WorkspaceContext } from '../context/WorkspaceContext';
import Workspace from '../components/workspace/Workspace';
import Profile from '../components/profile/Profile';
import InvitesModal from '../components/invites/InvitesModal';



const Home = () => {

const [mobileOpened, setMobileOpened] = useState(false);
const [desktopOpened, setDesktopOpened] = useState(false);
const [userWorkspaces, setUserWorkspaces] = useState([])
//@ts-ignore
const { focusedWorkspace, setFocusedWorkspace } = useContext(WorkspaceContext)

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
              padding="sm"
            >
              <InvitesModal />
              <AppShell.Navbar p="md">
              <Paper withBorder={true} onClick={() => 
          {setFocusedWorkspace({})}} p='sm' my='sm' radius={'md'}>
        <Text size='xs'>Profile?</Text>
        </Paper>                <Group>
                <Title size='sm' >Workspaces</Title>
                <NewWorkspace />
                </Group>
                {userWorkspaces?.map((workspace) => (
                  <WorkspaceCard workspace={workspace} />
                ))}
                  <Stack justify="flex-end" h={400}>
                    <Button color='yellow' type='button' w={100} onClick={() => logOut()}>Log Out</Button>
                  </Stack>
              </AppShell.Navbar>
              <AppShell.Main>
                  <Group justify='flex-end'>
                  <Burger opened={desktopOpened} onClick={() => setDesktopOpened(!desktopOpened)}/>
                  </Group>
                  { Object.keys(focusedWorkspace).length === 0 && focusedWorkspace.constructor === Object ?
                  <Profile />

                  :
                  <Workspace />

                  }
                 </AppShell.Main>
            </AppShell>
          );
      
}

export default Home