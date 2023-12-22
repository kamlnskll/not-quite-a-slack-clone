import React, { useContext } from 'react'
import { fetchWorkspaceUsers } from '../functions/workspace'
import { WorkspaceContext } from '../context/WorkspaceContext'
import { Title, Group, Container } from '@mantine/core'
import NewChannel from './NewChannel'


const Workspace = () => {

  //@ts-ignore
  const { focusedWorkspace } = useContext(WorkspaceContext)


const workspaceDataHandler = async () => {
if(focusedWorkspace && focusedWorkspace.workspace_id){
  fetchWorkspaceUsers(focusedWorkspace.workspace_id).then((res) => console.log(res))

}
// Fetch workspace data
// Fetch workspace members

// Fetch workspace channels
// Fetch messages in each workspace channel
    //
    //
    
} 



  return (
    <Container>
      <Group>
      <Title>{focusedWorkspace.workspaceName}</Title>
      <NewChannel />
      </Group>
    </Container>
  )
}

export default Workspace