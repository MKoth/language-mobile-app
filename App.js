import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import LevelsStackNavigator from './screens/LevelsStackNavigator';
import CardsScreen from './screens/CardsScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import WatchVideoScreen from './screens/WatchVideoScreen.js';

class App extends Component{
	render(){
		return (<MyApp />)
	}
}

const MyApp = DrawerNavigator({
	Home:{
		screen:LevelsStackNavigator
	},
	CardsScreen:{
		screen:CardsScreen
	},
	Settings:{
		screen:SettingsScreen
	},
	WatchVideo:{
		screen:WatchVideoScreen
	},
})

export default App;