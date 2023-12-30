import React, { useContext, useEffect, useState } from 'react'
import { WorkspaceContext } from '../../context/WorkspaceContext'
import { Title, Group, Container, Text, Flex } from '@mantine/core'
import NewChannel from '../channel/NewChannel'
import { fetchChannelsInWorkspace  } from '../../functions/channel'
import ChannelListItem from '../channel/ChannelListItem'
import { ChannelContext } from '../../context/ChannelContext'
import Channel from '../channel/Channel'
import InviteToWorkspaceModal from '../invites/InviteToWorkspaceModal'


const Workspace = () => {

  //@ts-ignore
  const { focusedWorkspace } = useContext(WorkspaceContext)
  //@ts-ignore
  const { focusedChannel, setFocusedChannel } = useContext(ChannelContext)
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
      <Title ff={'sans-serif'} >{focusedWorkspace.workspaceName}</Title>
      <Title c={''}  ff={'monospace'} mt='sm' ml='10px' order={3} >{Object.hasOwn(focusedChannel, 'channelName') ? `${focusedChannel.channelName}` : ``}</Title>
      <Group>
      <InviteToWorkspaceModal />
      <NewChannel />
      </Group>
        {/* @ts-ignore */}
        {channels.map((channelListItem) => (
        <Flex py={'2px'} w='25%' justify='left'>
        <ChannelListItem channel={channelListItem}/>
        </Flex>
        ))}
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