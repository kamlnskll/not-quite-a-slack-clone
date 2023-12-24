import React, { useContext, useEffect, useState } from 'react'
import { WorkspaceContext } from '../context/WorkspaceContext'
import { Title, Group, Container } from '@mantine/core'
import NewChannel from './NewChannel'
import { fetchChannelsInWorkspace, fetchWorkspaceChannelMessages } from '../functions/channel'


const Workspace = () => {

  //@ts-ignore
  const { focusedWorkspace } = useContext(WorkspaceContext)
  const [channels, setChannels] = useState([])


const workspaceDataHandler = async () => {
if(Object.hasOwn(focusedWorkspace, 'workspace_id')){
  fetchChannelsInWorkspace(focusedWorkspace.workspace_id).then((res: any) => setChannels(res)).then(() => {
  }).catch((err) => console.warn(err))
  // fetchWorkspaceUsers(focusedWorkspace.workspace_id).then((res) => console.log(res))

}

    
} 

useEffect(() => {
  workspaceDataHandler()
}, [focusedWorkspace])



  return (
    <Container>
      <Group>
      <Title onClick={() => console.log(channels)}>{focusedWorkspace.workspaceName}</Title>
      <NewChannel />
      </Group>
    </Container>
  )
}

export default Workspace