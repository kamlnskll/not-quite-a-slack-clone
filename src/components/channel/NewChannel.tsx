import React, { useContext, useState } from 'react'
import {ActionIcon, Modal, Title, Text, Input, Button, Group, TextInput, Container} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import { IconCubePlus } from '@tabler/icons-react'
import { newChannel } from '../../functions/channel'
import { WorkspaceContext } from '../../context/WorkspaceContext'


const NewChannel = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState('');
    // @ts-ignore
    const { focusedWorkspace } = useContext(WorkspaceContext)

    

  return (
    <>
        <Button leftSection={<IconCubePlus size='16' />} size='compact-md' onClick={open}>
        <Text size='sm'>Create New Channel</Text>
        </Button>
        <Modal opened={opened} onClose={close}>
        <Title size='sm'>New Channel</Title>
        <Input.Wrapper label="Name" my='sm'>
      <TextInput placeholder="Name channel" value={value}  onChange={(e) => setValue(e.currentTarget.value)} />
    </Input.Wrapper>
    <Group my='sm'>
    <Button color='blue' onClick={() => {
      if(focusedWorkspace && value !== '' && Object.hasOwn(focusedWorkspace, 'workspace_id')){
        newChannel(value, focusedWorkspace?.workspace_id).then((res) => 
        { console.log('Channel created successfully')
          console.log(res)
          close()
        })
      }
    }}>Create</Button>
    <Button color='orange' onClick={close}>Cancel</Button>
    </Group>
        </Modal>
        </>
  )
}

export default NewChannel