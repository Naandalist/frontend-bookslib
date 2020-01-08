import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import StartScreen from './src/screens/StartScreen';

import Dashboard from './src/screens/Dashboard';
import Detail from './src/screens/DetailBook';

import Login from './src/screens/Login';
import Register from './src/screens/Register';

import Profile from './src/screens/Profile';
import History from './src/screens/History';


const DashNavigator = createStackNavigator({
  Dashboard: {
		screen: Dashboard,
		navigationOptions: {
			tabBarVisible: false,
			header: null,
		},
	},
	Detail: {
		screen: Detail,
		navigationOptions: {
			tabBarVisible: false,
			header: null,
		},
	},
})

const BottomNavigator = createBottomTabNavigator(
	{
		Dashboard: {
			screen: DashNavigator,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
          <Icon 
            type="FontAwesome" 
            name="home"
            style={{color: tintColor, fontSize: 23}} 
          />
				),
			},
		},
		History: {
			screen: History,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon
						type='FontAwesome'
						name='history'
						style={{ color: tintColor, fontSize: 23 }}
					/>
				),
			},
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon
						type='FontAwesome'
						name='user'
						style={{ color: tintColor, fontSize: 23 }}
					/>
				),
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: '#7d977d',
			inactiveTintColor: '#757575',
			style: {
				backgroundColor: 'white',
				borderTopWidth: 0,
				shadowOffset: { width: 5, height: 3 },
				shadowColor: 'black',
				shadowOpacity: 0.5,
				elevation: 5,
			},
		},
	}
)

const AuthNavigator = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			tabBarVisible: false,
			header: null,
		},
	},
	Register: {
		screen: Register,
		navigationOptions: {
			tabBarVisible: false,
			header: null,
		},
	},
})

const switchScreen = createSwitchNavigator({
	Splash: StartScreen,
	AuthScreen: AuthNavigator,
	App: BottomNavigator,
})

export default createAppContainer(switchScreen)
