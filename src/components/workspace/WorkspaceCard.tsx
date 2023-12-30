import React, { useEffect, useState, useContext } from 'react'
import { fetchWorkspace } from '../../functions/workspace'
import { Paper, Text, UnstyledButton } from '@mantine/core'
import { WorkspaceContext } from '../../context/WorkspaceContext'

const WorkspaceCard = (workspace: any) => {

const [data, setData] = useState<any>()
//@ts-ignore
const { focusedWorkspace, setFocusedWorkspace } = useContext(WorkspaceContext)


useEffect(() => {
  // console.log(workspace.workspace)
  fetchWorkspace(workspace.workspace.workspaceId).then((res) => setData(res))
  // Can use a context useState to set the workspace data from this fetchWorkspace after clicking a workspace in sidebar  
  

}, [])


  return (
    <div>
        <UnstyledButton style={{borderStyle: 'solid', borderWidth: '1px', borderRadius: '5px', width: '100%'}} onClick={() => 
          { 
            setFocusedWorkspace(data)
            console.log(focusedWorkspace)}}p='xs' my='xs'>
        <Text size='xs'>{data?.workspaceName}</Text>
        </UnstyledButton>
    </div>
  )
}

export default WorkspaceCard