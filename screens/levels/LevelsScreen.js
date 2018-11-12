import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Title>Levels here</Title>
        </Content>
      </Container>
    );
  }
}