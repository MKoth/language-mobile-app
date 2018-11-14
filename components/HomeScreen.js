import React from "react";
import {FlatList, View} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation';
import ProgressCircle from 'react-native-progress-circle';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
              <Icon
              name='ios-menu'
              onPress={() => this.props.screenProps.navigation.dispatch(DrawerActions.openDrawer())}>
              </Icon>
          </Left>
          <Body>
              <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.props.screenProps.levels.map((element,key) => {
              return <Text key={key}>{element}</Text>
            })
          }
          {/*<Text>Home screen with levels</Text>
          <Button onPress={()=>this.props.navigation.navigate('Levels')}>
            <Text>Levels</Text>
          </Button>
          <FlatList
            data={[{key: 'Level 1'}, {key: 'level 2'}]}
            renderItem={({item}) => <View  style={{ flex: 1, flexDirection:'row', justifyContent: "center" }}>
              <ProgressCircle
                percent={30}
                radius={30}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff"
              >
                <Text style={{ fontSize: 18 }}>{'30%'}</Text>
              </ProgressCircle>
              <Text>{item.key}</Text>
            </View>}
          />*/}

        </Content>
      </Container>
    );
  }
}

class MyListItem extends React.PureComponent {
  render() {

  }
}