import React, { useContext } from 'react'
import { fetchWorkspaceUsers } from '../functions/workspace'
import { WorkspaceContext } from '../context/WorkspaceContext'
import { Title } from '@mantine/core'

type Props = {
    workspace_id: string
}
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
    <div>
      <Title>{focusedWorkspace.workspaceName}</Title>
    </div>
  )
}

export default Workspace