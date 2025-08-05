import {
  Container,
  Sidebar,
  Profile,
  Avatar,
  UserName,
  MenuList,
  MenuItem,
  Logout,
  MainContent,
  Card,
  Title,
  Text,
} from './style/styles';

const DashboardPage = () => {
  return (
    <Container>
      <Sidebar>
        <div>
          <Profile>
            <Avatar>👤</Avatar>
            <UserName>Parnia Zandieh</UserName>
          </Profile>

          <MenuList>
            <MenuItem>
              <span>⚙️</span>
              Attributes
            </MenuItem>
            <MenuItem last>
              <span>📦</span>
              Products
            </MenuItem>
          </MenuList>
        </div>

        <Logout>
          <span>↩️</span> Logout
        </Logout>
      </Sidebar>

      <MainContent>
        <Card>
          <Title>
            Hello, Parnia{' '}
            <span role='img' aria-label='waving hand'>
              👋
            </span>
          </Title>
          <Text>I'm very happy you are here,</Text>
          <Text noMargin>
            I hope you find this dashboard easy and useful to use{' '}
            <span role='img' aria-label='smiling face with smiling eyes'>
              😊
            </span>
          </Text>
        </Card>
      </MainContent>
    </Container>
  );
};

export default DashboardPage;
