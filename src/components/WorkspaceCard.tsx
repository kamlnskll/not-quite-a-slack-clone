import React, { useEffect, useState } from 'react'
import { fetchWorkspace } from '../functions/workspace'
import { Paper, Text } from '@mantine/core'

const WorkspaceCard = (workspace: any) => {

const [data, setData] = useState<any>()

useEffect(() => {
  // console.log(workspace.workspace)
  fetchWorkspace(workspace.workspace.workspaceId).then((res) => setData(res))
  

}, [])


  return (
    <div>
        <Paper withBorder={true} p='xs' my='xs' radius={'md'}>
        {/* <Text size='xs'>{data.workspaceName}</Text> */}
        </Paper>
    </div>
  )
}

export default WorkspaceCard