import React, { useEffect } from 'react'
import { fetchWorkspace } from '../functions/workspace'
import { Text } from '@mantine/core'

const WorkspaceCard = (workspace_id: string, name: string) => {

useEffect(() => {
    fetchWorkspace(workspace_id)
}, [])


  return (
    <div>
        <Text>{workspace_id}</Text>
        <Text>{name}</Text>
    </div>
  )
}

export default WorkspaceCard