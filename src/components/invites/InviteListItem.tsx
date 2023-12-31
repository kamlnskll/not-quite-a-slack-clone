import { Paper, Group, Text, Button, ButtonGroup, CloseButton, ActionIcon } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { acceptWorkspaceInvite, declineWorkspaceInvite } from '../../functions/invites'
import React, { useEffect } from 'react'

type Props = {
    invite: any
   
}


const InviteListItem = ({invite}: Props) => {
    useEffect(() => {}, 

    [])

  return (
            <Paper withBorder={true}>
                <Group>
                {invite.sender_id}
                {invite.workspace_id}
                </Group>
                <Group>
                <Group>
                <ActionIcon color='teal' onClick={() => {
                    acceptWorkspaceInvite(invite.workspace_id, invite.invite_id).then((res) => {
                    declineWorkspaceInvite(invite.invite_id)
                    console.log(res)
                   

                })
                }}>
                    <IconCheck />
                </ActionIcon>
                <CloseButton onClick={() => {
                    declineWorkspaceInvite(invite.invite_id).then((res) => console.warn(res)).catch((err) => console.log(err))
                }}/>
                </Group>
                </Group>
                
            </Paper>
  )
}

export default InviteListItem