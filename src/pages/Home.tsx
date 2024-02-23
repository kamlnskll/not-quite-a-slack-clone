import React, {useState, useEffect, useContext} from 'react'
import { AppShell, Burger, Group, Skeleton, Container, Stack, Button, Text, Title, Paper, UnstyledButton, Avatar } from '@mantine/core';
import { logOut } from '../functions/auth';
import { getUserWorkspaces } from '../functions/workspace'
import NewWorkspace from '../components/workspace/NewWorkspace';
import WorkspaceCard from '../components/workspace/WorkspaceCard';
import { WorkspaceContext } from '../context/WorkspaceContext';
import Workspace from '../components/workspace/Workspace';
import Profile from '../components/profile/Profile';
import InvitesModal from '../components/invites/InvitesModal';
import { ChannelContext } from '../context/ChannelContext';
import { auth } from '../firebase';
import { fetchProfileData } from '../functions/profile';
import { ProfileContext } from '../context/ProfileContext';



const Home = () => {

const [mobileOpened, setMobileOpened] = useState(false);
const [desktopOpened, setDesktopOpened] = useState(false);
const [userWorkspaces, setUserWorkspaces] = useState([])
//@ts-ignore
const { focusedWorkspace, setFocusedWorkspace } = useContext(WorkspaceContext)
const { setFocusedChannel } = useContext<any>(ChannelContext)
const { profileData, setProfileData } = useContext<any>(ProfileContext)

useEffect(() => {
  //@ts-ignore
  fetchProfileData(auth?.currentUser?.uid).then((res: any) => {
  setProfileData(res)
   console.log('RES from fetch profile data', res)})
  getUserWorkspaces().then((res) => {
    setUserWorkspaces(res)
    console.log(res)})
  
}, [])

useEffect(() => {
  setFocusedChannel({})
  
  }, [focusedWorkspace])
  

        return (
            <AppShell
            
              navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
              }}
              padding="sm"
            >
              <AppShell.Navbar p="md">
              <InvitesModal />
              <UnstyledButton style={{borderStyle: 'solid', borderWidth: '1px', borderRadius: '5px' }}onClick={() => 
          {setFocusedWorkspace({})}} p='sm' my='sm'>
            <Group>
              <Avatar size='sm' src={profileData.profilePic} />
        <Text size='sm'>{profileData.firstName} {profileData.lastName}</Text>
        </Group>
        </UnstyledButton>                <Group>
                <Title size='sm' >Workspaces</Title>
                <NewWorkspace />
                </Group>
                {userWorkspaces?.map((workspace) => (
                  <WorkspaceCard workspace={workspace} />
                ))}
                  <Title size='sm' >Direct Messages</Title>

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