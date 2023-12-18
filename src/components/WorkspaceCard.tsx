import React, { useEffect, useState } from 'react'
import { fetchWorkspace } from '../functions/workspace'
import { Paper, Text } from '@mantine/core'

const WorkspaceCard = (workspace: any) => {

const [data, setData] = useState<any>()

useEffect(() => {
  // console.log(workspace.workspace)
  fetchWorkspace(workspace.workspace.workspaceId).then((res) => setData(res))
  // Can use a context useState to set the workspace data from this fetchWorkspace after clicking a workspace in sidebar  
  

}, [])


  return (
    <div>
        <Paper withBorder={true} onClick={() => console.log(data)}p='xs' my='xs' radius={'md'}>
        <Text size='xs'>{data?.workspaceName}</Text>
        </Paper>
    </div>
  )
}

export default WorkspaceCard