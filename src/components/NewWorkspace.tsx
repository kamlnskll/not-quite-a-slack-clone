import React, { useState } from 'react'
import {ActionIcon, Modal, Title, Text, Input, Button, Group, TextInput} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import { createWorkspace, createWorkspaceMember } from '../functions/workspace'

const NewWorkspace = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState('');

    
    const workspaceCreationHandler = async (workspaceName: string) => {
        await createWorkspace(workspaceName).then((res) => {
            console.log(res)
            close()
            // createWorkspaceMember(res?.id, 3)
        }).catch((err) => console.log('Error while creating workspace', err))
    }

  return (
    <div>
        <ActionIcon onClick={open}/>
        <Modal opened={opened} onClose={close}>
        <Title size='sm'>New Workspace</Title>
        <Input.Wrapper label="Name" my='sm'>
      <TextInput placeholder="Name your workspace" value={value}  onChange={(e) => setValue(e.currentTarget.value)} />
    </Input.Wrapper>
    <Group my='sm'>
    <Button color='blue' onClick={() => workspaceCreationHandler(value)}>Create</Button>
    <Button color='orange'>Cancel</Button>
    </Group>
        </Modal>
    </div>
  )
}

export default NewWorkspace