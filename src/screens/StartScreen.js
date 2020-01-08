
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class StartScreen extends React.Component {
	async componentDidMount() {
		if (await AsyncStorage.getItem('userToken')) {
			this.props.navigation.navigate('App')
		} else {
			this.props.navigation.navigate('AuthScreen')
		}
	}
        render() {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <ActivityIndicator size='large' color='black'/>
                </View>
            )
        }
}
export default StartScreen;