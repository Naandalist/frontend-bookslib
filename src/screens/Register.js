import React, { Component } from 'react'
import Axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage'
import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	Button,
	Text,
} from 'native-base'
import {
	View,
	TextInput,
	ScrollView,
	StatusBar,
	TouchableHighlight,
	ActivityIndicator,
	Keyboard,
	StyleSheet,
} from 'react-native'

class Register extends Component{
    render(){
        return(
            <>
            <ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						alignSelf: 'center',
						width: '87%',
						justifyContent: 'center',
						flexDirection: 'column',
						flex: 1,
						marginTop: 100,
					}}>
					<StatusBar barStyle='dark-content' backgroundColor='white' />
					<View style={{ marginBottom: 30 }}>
						<Text
							style={{
								fontSize: 24,
								fontWeight: 'bold',
								color: '#7d977d',
							}}>
							Here to Create
						</Text>
						<Text
							style={{
								fontSize: 30,
								fontWeight: 'bold',
								color: '#7d977d',
							}}>
							New Account.
						</Text>
					</View>
					<View style={{ marginTop: -20 }}>
						<Form>
                            <Item floatingLabel style={{ marginLeft: 0 }}>
								<Label style={{ color: '#c8d6e5' }}>Name</Label>
								<Input
									autoCapitalize='none'
								/>
							</Item>
							<Item floatingLabel style={{ marginLeft: 0 }}>
								<Label style={{ color: '#c8d6e5' }}>Email</Label>
								<Input
									autoCapitalize='none'
									keyboardType='email-address'
								/>
							</Item>
							<Item floatingLabel style={{ marginLeft: 0 }}>
								<Label style={{ color: '#c8d6e5' }}>
									Password
								</Label>
								<Input
                                    autoCapitalize='none'
                                    secureTextEntry={true}
								/>
							</Item>
						</Form>
					</View>
					<View
						style={{
							marginTop: 50,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							style={{
								fontSize: 22,
								marginTop: 16,
								color: '#7d977d',
								fontWeight: 'bold',
							}}>
							Sign Up 
						</Text>
						<Button
							rounded
							style={{
								height: 54,
								width: 54,
								paddingLeft: 8,
								backgroundColor: '#7d977d',
							}}>
							<Icon
								style={styles.signinIco}
								name="book"
								size={24}
								color="white"
							/>
						</Button>
					</View>
					<View
						style={{
							marginTop: 40,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<View>
							<Text
                                onPress={() => this.props.navigation.replace('Login')}
								style={{
									fontSize: 15,
									marginTop: -15,
									color: '#7d977d',
									fontWeight: 'bold',
								}}>
								Switch to Sign In
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
            </>
        );
    }
}

const styles = StyleSheet.create({
	signinIco:{
		marginLeft: 9,
	},
  });

export default Register;