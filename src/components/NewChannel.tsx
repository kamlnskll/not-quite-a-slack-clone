import React, { useState } from 'react'
import {ActionIcon, Modal, Title, Text, Input, Button, Group, TextInput, Container} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import { IconCubePlus } from '@tabler/icons-react'

const NewChannel = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState('');

    

  return (
    <Container size='md'>
        <ActionIcon size='sm'>
        <IconCubePlus onClick={open}/>
        </ActionIcon>
        <Modal opened={opened} onClose={close}>
        <Title size='sm'>New Channel</Title>
        <Input.Wrapper label="Name" my='sm'>
      <TextInput placeholder="Channel Name" value={value}  onChange={(e) => setValue(e.currentTarget.value)} />
    </Input.Wrapper>
    <Group my='sm'>
    <Button color='blue' onClick={() => {}}>Create</Button>
    <Button color='orange'>Cancel</Button>
    </Group>
        </Modal>
    </Container>

  )
}

export default NewChannel