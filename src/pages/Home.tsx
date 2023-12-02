import React, {useState} from 'react'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';


const Home = () => {

const [mobileOpened, setMobileOpened] = useState(false);
const [desktopOpened, setDesktopOpened] = useState(false);

        return (
            <AppShell
              header={{ height: 60 }}
              navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
              }}
              padding="md"
            >
              <AppShell.Header>
                <Group h="100%" px="md">
 
            
                </Group>
              </AppShell.Header>
              <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                  ))}
              </AppShell.Navbar>
              <AppShell.Main>Main</AppShell.Main>
            </AppShell>
          );
      
}

export default Home