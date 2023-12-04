import React, {useState} from 'react'
import { AppShell, Burger, Group, Skeleton, Container, Button } from '@mantine/core';


const Home = () => {

const [mobileOpened, setMobileOpened] = useState(false);
const [desktopOpened, setDesktopOpened] = useState(true);

        return (
            <AppShell
            
              navbar={{
                width: 200,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
              }}
              padding="md"
            >
          
              <AppShell.Navbar p="md">
                Navbar
                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                  ))}
              </AppShell.Navbar>
              <AppShell.Main>
                <Container>
                  <Burger opened={desktopOpened} onClick={() => setDesktopOpened(!desktopOpened)}/>
                  </Container></AppShell.Main>
            </AppShell>
          );
      
}

export default Home