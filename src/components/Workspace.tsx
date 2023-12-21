import React from 'react'
import { fetchWorkspaceUsers } from '../functions/workspace'

type Props = {
    workspace_id: string
}
const Workspace = ({workspace_id}: Props) => {

const workspaceDataHandler = async () => {
    // This handler will handle
    //
// Fetch workspace data
// Fetch workspace members
fetchWorkspaceUsers(workspace_id).then((res) => console.log(res))

// Fetch workspace channels
// Fetch messages in each workspace channel
    //
    //
    
} 



  return (
    <div>Workspace</div>
  )
}

export default Workspace