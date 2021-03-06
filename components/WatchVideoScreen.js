import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon
              name='ios-menu'
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            </Icon>
          </Left>
          <Body>
            <Title>Watch video</Title>
          </Body>
          <Right />
        </Header>
        <Content>
            <Text>Watch video here</Text>
        </Content>
      </Container>
    );
  }
}