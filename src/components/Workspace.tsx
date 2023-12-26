import React, { useContext, useEffect, useState } from 'react'
import { WorkspaceContext } from '../context/WorkspaceContext'
import { Title, Group, Container } from '@mantine/core'
import NewChannel from './NewChannel'
import { fetchChannelsInWorkspace, fetchWorkspaceChannelMessages } from '../functions/channel'
import ChannelListItem from './ChannelListItem'
import { ChannelContext } from '../context/ChannelContext'
import ChatBox from './ChatBox'
import Channel from './Channel'


const Workspace = () => {

  //@ts-ignore
  const { focusedWorkspace } = useContext(WorkspaceContext)
  //@ts-ignore
  const { focusedChannel } = useContext(ChannelContext)
  const [channels, setChannels] = useState([])


const workspaceDataHandler = async () => {
if(Object.hasOwn(focusedWorkspace, 'workspace_id')){
  fetchChannelsInWorkspace(focusedWorkspace.workspace_id).then((res: any) => setChannels(res)).then(() => {
  }).catch((err) => console.warn(err))
  // fetchWorkspaceUsers(focusedWorkspace.workspace_id).then((res) => console.log(res))

}

    
} 

const channelHandler = async () => {
if(Object.hasOwn(focusedWorkspace, 'workspace_id') && Object.hasOwn(focusedChannel, 'channel_id')){
// Once a channel is selected, fetch the channel data

}

}

useEffect(() => {
  workspaceDataHandler()
}, [focusedWorkspace])

useEffect(() => {
  channelHandler()
}, [focusedChannel])


  return (
    <Container>
      <Group>
      <Title onClick={() => console.log(channels)}>{focusedWorkspace.workspaceName}</Title>
      <NewChannel />
      </Group>
      <Container>
        {/* @ts-ignore */}
        {channels.map((channel) => (
        <ChannelListItem channel={channel}/>
        ))}
      </Container>
      <Container>
        
      </Container>
    </Container>
  )
}

export default Workspace