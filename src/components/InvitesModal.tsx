import React from 'react'
import {useDisclosure} from '@mantine/hooks'
import { ActionIcon, Container, Text, Modal } from '@mantine/core';


const InvitesModal = () => {

    const [opened, { open, close }] = useDisclosure(false);


  return (
    <Container>
        <ActionIcon onClick={open}>
            <Text>Invites</Text>
        </ActionIcon>
        <Modal opened={opened} onClose={close}>
        <Text>Invites? You? Neva neva neva!</Text>

        </Modal>
    </Container>
  )
}

export default InvitesModal