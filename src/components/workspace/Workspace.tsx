import React, { useContext, useEffect, useState } from 'react'
import { WorkspaceContext } from '../../context/WorkspaceContext'
import { Title, Group, Container, Text } from '@mantine/core'
import NewChannel from '../channel/NewChannel'
import { fetchChannelsInWorkspace  } from '../../functions/channel'
import ChannelListItem from '../channel/ChannelListItem'
import { ChannelContext } from '../../context/ChannelContext'
import ChatBox from '../chat/ChatBox'
import Channel from '../channel/Channel'
import InviteToWorkspaceModal from '../invites/InviteToWorkspaceModal'


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

}

    
} 

// const channelHandler = async () => {
// if(Object.hasOwn(focusedWorkspace, 'workspace_id') && Object.hasOwn(focusedChannel, 'channel_id')){
// // Select channel. 
// // Pass channel data with focusedChannel
// // Fetch messages for that channel

// }

// }

useEffect(() => {
  workspaceDataHandler()
}, [focusedWorkspace])



  return (
    <Container>
      <Group>
      <Title onClick={() => console.log(channels)}>{focusedWorkspace.workspaceName}</Title>
      <NewChannel />
      </Group>
      <InviteToWorkspaceModal />

      <Container>
        {/* @ts-ignore */}
        {channels.map((channelListItem) => (
        <ChannelListItem channel={channelListItem}/>
        ))}
      </Container>
      <Container>
        { Object.keys(focusedChannel).length === 0 ? (
null
        ) : (
        <Channel channel={focusedChannel}/>

        )}
      </Container>
    </Container>
  )
}

export default Workspace