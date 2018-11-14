import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {View, Text, StyleSheet} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import LevelsStackNavigator from './components/LevelsStackNavigator';
import CardsScreen from './components/CardsScreen.js';
import SettingsScreen from './components/SettingsScreen.js';
import WatchVideoScreen from './components/WatchVideoScreen.js';

const store = createStore(rootReducer);

class App extends Component{
	render(){
		return (<Provider store={store}><MyApp /></Provider>)
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