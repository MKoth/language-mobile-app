import React from "react";
import { createStackNavigator, DrawerActions } from 'react-navigation';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import HomeScreen from './HomeScreen';
//import LevelsScreen from './levels/LevelsScreen';

export default class LevelsStackNavigator extends React.Component {
    render(){
        return(
            <Container>
                <LvlsStackNavigator screenProps = {{navigation:this.props.navigation, levels:["Level 1", "Level 2"]}}/>
            </Container>
        );
    }
}

const LvlsStackNavigator = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    /*Levels:{
        screen: LevelsScreen
    }*/
})