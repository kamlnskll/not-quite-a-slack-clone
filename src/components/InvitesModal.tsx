import React, {useEffect, useState} from 'react'
import {useDisclosure} from '@mantine/hooks'
import { workspaceInviteListener } from '../functions/invites';
import { ActionIcon, Container, Text, Modal, Paper } from '@mantine/core';
import { auth } from '../firebase';
import InviteListItem from './InviteListItem';

const InvitesModal = () => {

    const [opened, { open, close }] = useDisclosure(false);
    const [invites, setInvites] = useState<any>([])
    

useEffect(() => {
const unsub = workspaceInviteListener(auth?.currentUser?.uid, (invites) => {
setInvites(invites)
})
return () => {
    if (unsub && typeof unsub === 'function') {
      //@ts-ignore
      unsub();
    }
  };

}, [])

  return (
    <Container>
        <ActionIcon onClick={open}>
            <Text>Invites</Text>
        </ActionIcon>
        <Modal opened={opened} onClose={close}>
        <Text onClick={() => console.log(invites)}>You have {invites.length} invites</Text>
        {invites.map((invite: any) => (
            <InviteListItem invite={invite} />
        ))}
        </Modal>
    </Container>
  )
}

export default InvitesModal