import React, { useContext, useState } from 'react'
import {useDisclosure} from '@mantine/hooks'
import { ActionIcon, Button, Container, Input, Modal, Text, TextInput, Title } from '@mantine/core'
import { createInviteToWorkspace } from '../../functions/invites'
import { WorkspaceContext } from '../../context/WorkspaceContext'
import { IconUsers } from '@tabler/icons-react'

const InviteToWorkspaceModal = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const [userId, setUserId] = useState('')
    const { focusedWorkspace } = useContext<any>(WorkspaceContext)

  return (
<>
    <Button my='5%' size='compact-md' leftSection={<IconUsers size='16' />} onClick={open}>
        <Text size='sm' >Invite to Workspace</Text>
    </Button>
    <Modal opened={opened} onClose={close}>
    <Title size='xs' onClick={() => console.log()}>Invite a user to this workspace</Title>
    <Input.Wrapper>
    <TextInput 
    placeholder='Invite user by their ID'
    onChange={((e) => setUserId(e.currentTarget.value))}
    value={userId}
    />
    </Input.Wrapper>
    <Button onClick={() => {
      if(focusedWorkspace && userId !== ''){
        createInviteToWorkspace(focusedWorkspace.workspace_id, userId).then(() => {
          close()
          setUserId('')
        })
      }
    }}>Send Invite</Button>
    <Button onClick={() => {
      setUserId('')
      close()
    }}>Cancel</Button>
    </Modal>
    </>
  )
}

export default InviteToWorkspaceModal